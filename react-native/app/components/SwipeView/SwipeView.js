import React, { Component } from 'react';
import { View } from 'react-native';
import { SummaryCard } from './SummaryCard';
import { styles } from './styles';
import NoMoreCards from './NoMoreCards';

import DeckSwiper from '../DeckSwiper';

export default class SwipeView extends Component {
  constructor(props) {
    super(props);
    this.onSwipeRight = this.onSwipeRight.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // compare and check whether restaurants have the same reference
    // since we use concat when we add new restaurants, this only fires then
    if(nextProps.restaurants !== this.props.restaurants) return true;
    return false;
  }

  onSwipeRight(restaurant) {
    this.props.addToResults(restaurant);
    this.onSwipeLeft();
  }

  onSwipeLeft() {
    this.props.incrementSwipeCounter();
    if(this.props.restaurants.length - this.props.swipeCounter < 5 && this.props.available) {
      this.props.getRestaurants();
    };
  }
  
  render() {
    return (
      <View style={styles.swipeViewBackground}>
        <DeckSwiper
          dataSource={this.props.restaurants}
          renderItem={(cardData) => <SummaryCard restaurant={cardData}/>}
          onSwipeRight={restaurant => this.onSwipeRight(restaurant)}
          onSwipeLeft={() => this.onSwipeLeft()}
          renderEmpty={() => <NoMoreCards/>}
          index={this.props.swipeCounter}
        />
      </View>
    );
  }

};


