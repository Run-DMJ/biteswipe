import { connect } from 'react-redux';
import Restaurant from './Restaurant';

import {getRestaurant} from '../../action-creators/restaurants';

const mapStateToProps = state => {
  return {
    restaurant: state.restaurants.restaurant
  };
}

const mapDispatchToProps = dispatch => { 
  return { 
    getRestaurant: (id) => { 
      dispatch(getRestaurant(id))
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);