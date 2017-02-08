import React, {Component} from 'react';
import { SummaryCard } from './SummaryCard';
import { styles } from './styles';

import { Button } from 'react-native';
import { View, DeckSwiper } from 'native-base'

import {Actions} from 'react-native-router-flux';

const NoMoreCards = () => {
  return (
    <View>
      <Text>No more cards</Text>
    </View>
  )
};

export default class SwipeView extends Component {

  render() {

    const getRestaurants = () => {
      this.props.getRestaurants();
    }

    return (
      <View style={styles.swipeViewBackground}>
        <DeckSwiper
          dataSource={this.props.restaurants}
          renderItem={(cardData) => <SummaryCard restaurant={cardData} />}
        />
      </View>
    )
  }
}
