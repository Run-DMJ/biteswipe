import React, { Component } from 'react';
import { styles } from './styles';

import { View, Text, Image, StyleSheet } from 'react-native';
import { Tabs } from 'native-base';
import Carousel from 'react-native-looped-carousel';

import Reviews from './Reviews';
import Info from './Info';
import CarouselItem from './CarouselItem';

export default class extends Component {

  constructor(props){
    super(props)
  };

  componentDidMount(){
    this.props.getRestaurant(this.props.restaurant.id)
    this.props.getReviews(this.props.restaurant.id)
  };

  render () {
    return (
      <View style={styles.main}>
        { this.props.restaurant.photos ? <Carousel
          style={styles.cardImage}
          delay={10000}
          autoplay={true}>
          {
            this.props.restaurant.photos.map( (photo, index) => {
              return (
                <CarouselItem key={index} image={photo}></CarouselItem>
              )
            })
          }
        </Carousel> : <Text></Text> }
        <Text style={styles.cardTitle}>{this.props.restaurant.name}</Text>
        <View>
          <Tabs >
            <Info tabLabel='Info' restaurant={this.props.restaurant} />
            <Reviews tabLabel='Reviews' reviews={this.props.reviews} />
          </Tabs>
        </View>
      </View>
    );
  }
}
