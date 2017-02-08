import {Platform} from 'react-native';

const PROD = 'https://biteswipe.herokuapp.com'; 
const DEV = Platform.OS === 'ios' ? 'http://127.0.0.1:1337' : 'http://10.0.2.2:1337'; 
export const ADDRESS = __DEV__ ? DEV : PROD;

// auth
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const LOGGED_IN = 'LOGGED_IN';
export const GETTING_ACCESS_TOKEN = 'GETTING_ACCESS_TOKEN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const AUTHENTICATED_USER = 'AUTHENTICATED_USER';

// restaurants
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

// restaurants
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

// reviews
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

//in filter settings, we will need to determine the user's location
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS';
