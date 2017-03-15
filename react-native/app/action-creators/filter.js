import axios from 'axios';
import {LOCATION_ERROR, SEARCH_SETTINGS_ERROR} from '../errors';
import {handleAuthenticationError} from './auth';
import {
  RECEIVE_LOCATION, RECEIVE_SETTINGS, SET_CATEGORIES, SET_TEMPORARY_CATEGORIES, 
  SET_TEMPORARY_RADIUS, SET_TEMPORARY_PRICE_RANGE, ADDRESS
} from '../constants';

export const receiveLocation = location =>
({
  type: RECEIVE_LOCATION,
  location
});

export const receiveSearchSettings = settings =>
({
  type: RECEIVE_SETTINGS,
  settings
});

export const setTemporaryCategories = temporaryCategories => 
({
  type: SET_TEMPORARY_CATEGORIES,
  temporaryCategories
});

export const setTemporaryRadius = temporaryRadius => 
({
  type: SET_TEMPORARY_RADIUS,
  temporaryRadius
});

export const setTemporaryPriceRange = temporaryPriceRange => 
({
  type: SET_TEMPORARY_PRICE_RANGE,
  temporaryPriceRange
});

export const getCurrentLocation = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          dispatch(receiveLocation(location));
          resolve(location);
      }, 
        error => {
          error.type = LOCATION_ERROR;
          reject(error)
      }, {
        timeout: 5000
      });
    });
	};
};

export const getSearchSettings = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      axios.get(`${ADDRESS}/api/searchSettings`)
        .then(res => res.data)
        .then(settings => {
           dispatch(receiveSearchSettings(settings));
           resolve(settings);
        })
        .catch(error => {
          error.type = SEARCH_SETTINGS_ERROR;
          handleAuthenticationError(error, getSearchSettings, resolve, reject)
        }); 
    });
  };
};

export const updateSearchSettings = (priceRange, radius, categories) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {

      const settings = { priceRange, radius, categories };
      dispatch(receiveSearchSettings(settings));

      axios.put(`${ADDRESS}/api/searchSettings`, settings)
        .then(res => res.data)
        .then(() => {
          resolve(settings);
        })
        .catch(error => {
          error.type = SEARCH_SETTINGS_ERROR;
          handleAuthenticationError(error, updateSearchSettings, resolve, reject)
        }); 
    }); 
  }
};


