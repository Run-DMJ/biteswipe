import axios from 'axios';
import {REFRESH_TOKEN, ACCESS_TOKEN, LOGGED_IN, GETTING_ACCESS_TOKEN, LOGIN_ERROR, SIGNUP_ERROR, AUTHENTICATED_USER, ADDRESS} from '../constants';
import store from '../store'

export const receiveRefreshToken = refreshToken => ({
  type: REFRESH_TOKEN, refreshToken
});

export const receiveAccessToken = accessToken => ({
  type: ACCESS_TOKEN, accessToken
});

export const updateLoggedIn = loggedIn => ({
  type: LOGGED_IN, loggedIn
});

export const updateGettingAccessToken = gettingAccessToken => ({
  type: GETTING_ACCESS_TOKEN, gettingAccessToken
});

export const updateLoginError = loginError => ({
  type: LOGIN_ERROR, loginError
});

export const updateSignupError = signupError => ({
  type: SIGNUP_ERROR, signupError
});

export const receiveAuthenticatedUser = user => ({
  type: AUTHENTICATED_USER, user
})

// can be utilized by any action-creators that hit protected routes
export const handleAuthenticationError = (error, func) => {
  if (error.response && error.response.status === 401) store.dispatch(getAccessToken(func));
  else console.error(error);
};


export const getAccessToken = (func) => 
  (dispatch, getState) =>
    axios.get(`${ADDRESS}/api/auth/token`, 
      {headers: {'Authorization': `Bearer ${getState().auth.refreshToken}`}})
      .then(res => res.data)
      .then(body => {
        dispatch(updateGettingAccessToken(false));
        dispatch(receiveAccessToken(body.accessToken));
        // try async thunk again
        if(func) dispatch(func());
      })
      .catch(error => {
        if(error.response && error.response.status === 401) dispatch(logout);
        else console.error(error);
      });

export const getAuthenticatedUser = () => 
  (dispatch, getState) =>
    axios.get(`${ADDRESS}/api/auth/user`, 
      {headers: {'Authorization': `Bearer ${getState().auth.refreshToken}`}})
      .then(res => res.data)
      .then(body => {
        dispatch(receiveAuthenticatedUser(body.user));
      })
      .catch(error => {
        if(error.response && error.response.status === 401) dispatch(logout);
        else console.error(error);
      });
      
export const signup = (name, email, password) => 
  dispatch =>
    axios.post(`${ADDRESS}/api/auth/signup`,
      {name, email, password})
      .then(res => res.data)
      .then(body => {
        dispatch(receiveRefreshToken(body.refreshToken));
        dispatch(receiveAccessToken(body.accessToken));
        dispatch(updateLoggedIn(true));
        dispatch(updateLoginError(''));
        dispatch(updateSignupError(''));
      })
      .catch(error => {
        console.error(error);
        dispatch(updateSignupError('Email has already been used'));
      });

export const login = (username, password) =>
  dispatch =>
    axios.post(`${ADDRESS}/api/auth/local/login`,
      {username, password})
      .then(res => res.data)
      .then(body => {
        dispatch(receiveRefreshToken(body.refreshToken));
        dispatch(receiveAccessToken(body.accessToken));
        dispatch(updateLoggedIn(true));
        dispatch(updateLoginError(''));
        dispatch(updateSignupError(''));
      })
      .catch(error => {
        console.error(error);
        dispatch(updateLoginError('Invalid email/password'));
      });

export const logout = () =>
  (dispatch, getState) =>
    axios.post(`${ADDRESS}/api/auth/logout`, 
      {refreshToken: getState().auth.refreshToken})
      .then(() => {
        dispatch(receiveRefreshToken(''));
        dispatch(receiveAccessToken(''));
        dispatch(updateLoggedIn(false));
      })
      .catch(console.error);

