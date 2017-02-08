import {RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT, RECEIVE_REVIEWS, ADDRESS} from '../constants';
import axios from 'axios';
import {handleAuthenticationError} from './auth';

export const receiveRestaurants = restaurants => ({
	type: RECEIVE_RESTAURANTS,
	restaurants
});

export const receiveRestaurant = restaurant => ({
	type: RECEIVE_RESTAURANT,
	restaurant
});

export const receiveReviews = reviews => ({
	type: RECEIVE_REVIEWS,
	reviews
});

export const getRestaurants = () =>
	(dispatch, getState) => {
		axios.get(`${ADDRESS}/api/restaurants`,
			{
				headers: {'Authorization': `Bearer ${getState().auth.accessToken}`},
				params: {
				  latitude: getState().filter.location.latitude,
				  longitude: getState().filter.location.longitude,
				  radius: getState().filter.settings.radius,
				  priceRange: getState().filter.settings.priceRange.join(','),
				  categories: getState().filter.settings.categories.join(',')
				}
			})
			.then(res => res.data)
			.then(body => {
				dispatch(receiveRestaurants(body.businesses));
			})
			.catch(error => handleAuthenticationError(error, getRestaurants));
		}

export const getRestaurant = (id) =>
	(dispatch) => {
		axios.get(`${ADDRESS}/api/restaurants/${id}`)
		.then(res => res.data)
		.then(restaurant => {
			dispatch(receiveRestaurant(restaurant));
		})
		.catch(error => handleAuthenticationError(error, getRestaurant));
		}

export const getReviews = (id) =>
	(dispatch) => {
		axios.get(`${ADDRESS}/api/restaurants/:id/reviews`, {
			params: {
				id: id
			}
		})
		.then(res => res.data)
		.then(reviews => {
			dispatch(receiveReviews(reviews));
		})
		.catch(error => handleAuthenticationError(error, getRestaurant));
		}
