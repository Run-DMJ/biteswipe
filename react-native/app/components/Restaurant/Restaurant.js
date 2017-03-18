import React, { Component } from 'react';
import { styles } from './styles';

import { View, Text, Image, StyleSheet } from 'react-native';
import { Container, Tabs } from 'native-base';
import Carousel from 'react-native-looped-carousel';

import myTheme from './light.js'

import Reviews from './Reviews';
import Info from './Info';
import CarouselItem from './CarouselItem';
import Loading from '../Loading';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  componentWillReceiveProps(nextProps) {
    // if not currently loading restaurant, reload
    if(this.props.restaurant && this.props.restaurant.id !== nextProps.restaurant.id) {
      this.load();
    };
  }

  load() {
    this.setState({
      loading: true
    });

    Promise.all([
      this.props.getRestaurant(this.props.selectedRestaurant.id),
      this.props.getReviews(this.props.selectedRestaurant.id)
      ])
    .then(() => {
      this.setState({
        loading: false
      });
    })
    .catch(error => {
      this.setState({
        loading: false
      });
      console.log(error);
    });
  }

  render() {
    if(this.state.loading) {
      return (
        <Loading />
      );
    } else {
      return (
        <Container theme={myTheme}>
          <View style={styles.main}>
            {
              <Carousel
                style={styles.cardImage}
                delay={10000}
                autoplay={true}>
                {
                  this.props.restaurant.photos.length ?
                  this.props.restaurant.photos.map((photo, index) => {
                    return (
                      <CarouselItem key={index} image={photo} name={this.props.restaurant.name}/>
                    )
                  })
                  : <CarouselItem image="https://upload.wikimedia.org/wikipedia/commons/2/28/Rough_chameleon_%28Trioceros_rudis%29.jpg" name={this.props.restaurant.name}/>
                }
              </Carousel>
            }
            <View style={styles.tabContainer}>
              <Tabs>
                <Info tabLabel='Info' restaurant={this.props.restaurant} />
                <Reviews tabLabel='Reviews' reviews={this.props.reviews} />
              </Tabs>
            </View>
          </View>
        </Container>
        );
    };
  }
}
