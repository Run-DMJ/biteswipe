import React, { Component } from 'react';

import { View, Text, Image, TouchableHighlight, Button, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import { HighlightsBox } from './HighlightsBox';
import { RatingStars } from './RatingStars';

import { styles } from './styles';

export const SummaryCard = React.createClass({

  render () {
    const goToRestaurant = () => Actions.restaurant({restaurant: this.props.restaurant});
    return (
      <View style={styles.card}>
        <TouchableHighlight onPress={goToRestaurant}>
          <Image
            source={{uri: this.props.restaurant.image_url}}
            style={styles.cardImage}>
            <LinearGradient
              colors={['transparent', '#777']}
              start={{x:0, y:.8}}
              style={styles.cardImage} />
          </Image>
        </TouchableHighlight>
        <Text style={styles.cardTitle}>{this.props.restaurant.name}</Text>
        <Text style={styles.cardSubTitle}>{this.props.restaurant.categories[0].title}</Text>
        <View style={styles.cardContent}>
          <HighlightsBox restaurant={this.props.restaurant}/>
          <View style={styles.ratingView}>
            <RatingStars rating={this.props.restaurant.rating}/>
            <View style={styles.yelpContainer}>
              <TouchableHighlight
                style={styles.yelpButton}
                onPress={() => Linking.openURL('https://www.yelp.com/sf')}>
                <Image
                  source={require('./img/Yelp.png')}
                  style={styles.yelpImg} />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
})
