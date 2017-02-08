const router = require('express').Router();
const axios = require('axios');
const {updateSecretsFile} = require('./utils');
const env = require('APP').env;

const refreshYelpToken = (req, res, next, attempted) => {
	if(attempted) return next();
	axios.post('https://api.yelp.com/oauth2/token', querystring.stringify({
		grant_type: 'client_credentials',
		client_id: env.YELP_CLIENT_ID,
		client_secret: env.YELP_CLIENT_SECRET
	}), {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
	.then(res => res.data)
	.then(body => {
		// update secrets file (if server restarts)
		const keys = ['YELP_TOKEN', 'YELP_TOKEN_EXPIRATION_DATE'];
		const expiration = Date.now() + Number(body.expires_in) * 1000;
		const values = [body.access_token, expiration];
		updateSecretsFile(keys, values);

		// update currently loaded env
		env.YELP_TOKEN = body.access_token;
		env.YELP_TOKEN_EXPIRATION_DATE = body.expiration;
		req.refreshedYelpToken = true;

		yelp(req, res, next);
	})
	.catch(next);
};

const yelp = (req, res, next) => {
	axios.get('https://api.yelp.com/v3/businesses/search?term=food&', {
		headers: { Authorization: `Bearer ${env.YELP_TOKEN}`},
		params: {
			latitude: req.query.latitude,
			longitude: req.query.longitude,
			radius: req.query.radius,
			price: req.query.price,
			categories: req.query.categories,
			open_now: true
		}
	})
	.then(res => res.data)
	.then(body => {
		res.json(body);
	})
	.catch(error => {
		if(error.response.status === 401) refreshYelpToken(req, res, next, req.refreshedYelpToken || false);
		else {
			req.refreshedYelpToken = false;
			next(error);
		}
	});
};

const restaurant = (req, res, next) => {
	axios.get(`https://api.yelp.com/v3/businesses/${req.params.id}`, {
		headers: { Authorization: `Bearer ${env.YELP_TOKEN}`}})
	.then(res => res.data)
	.then(restaurant => {
		res.json(restaurant);
	})
	.catch(error => {
		if(error.response.status === 401) refreshYelpToken(req, res, next, req.refreshedYelpToken || false);
		else {
			req.refreshedYelpToken = false;
			next(error);
		}
	});
};

const reviews = (req, res, next) => {
	axios.get(`https://api.yelp.com/v3/businesses/${req.query.id}/reviews`, {
		headers: { Authorization: `Bearer ${env.YELP_TOKEN}`}})
	.then(res => res.data)
	.then(reviews => {
		res.json(reviews.reviews);
	})
	.catch(error => {
		if(error.response.status === 401) refreshYelpToken(req, res, next, req.refreshedYelpToken || false);
		else {
			req.refreshedYelpToken = false;
			next(error);
		}
	})
}

// get all restaurants matching filter
router.get('/', yelp);

// get restaurant detail by restaurant id
router.get('/:id', restaurant);

// get restaurant reviews by restaurant id
router.get('/:id/reviews', reviews);

module.exports = router;
