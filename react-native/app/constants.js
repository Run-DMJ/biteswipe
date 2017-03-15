import {Platform} from 'react-native';
const PROD = 'https://biteswipe.herokuapp.com';
const DEV = Platform.OS === 'ios' ? 'http://127.0.0.1:1337' : 'http://10.0.2.2:1337';
export const ADDRESS = __DEV__ ? DEV : PROD;

// contact
export const CONTACT = "biteswipeapp@gmail.com";

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
export const CLEAR_RESTAURANTS = 'CLEAR_RESTAURANTS';
export const INCREMENT_SWIPE_COUNTER = 'INCREMENT_SWIPE_COUNTER';
export const CLEAR_SWIPE_COUNTER = 'CLEAR_SWIPE_COUNTER';
export const ADD_TO_RESULTS = 'ADD_TO_RESULTS';
export const REMOVE_FROM_RESULTS = 'REMOVE_FROM_RESULTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const SET_AVAILABLE = 'SET_AVAILABLE';

// restaurant
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

// reviews
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

//in filter settings, we will need to determine the user's location
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_SETTINGS = 'RECEIVE_SETTINGS';
export const SET_SETTINGS = 'SET_SETTINGS';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const SET_TEMPORARY_CATEGORIES = 'SET_TEMPORARY_CATEGORIES';
export const SET_TEMPORARY_RADIUS = 'SET_TEMPORARY_RADIUS';
export const SET_TEMPORARY_PRICE_RANGE = 'SET_TEMPORARY_PRICE_RANGE';

// ui
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

// general
export const CLEAR_STORE = 'CLEAR_STORE';
