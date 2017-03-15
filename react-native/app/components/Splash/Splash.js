import React, {Component} from 'react';

import {
  Dimensions,
  View
} from 'react-native';

const {width, height} = Dimensions.get('window');

import styles from './styles';
import {colors} from '../colors';
import Carousel from 'react-native-looped-carousel';
import CarouselItem from './CarouselItem';

import {
  MKButton,
  MKColor
} from 'react-native-material-kit';

import {Actions} from 'react-native-router-flux';

export default class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: {
        width, height
      },
      login: false
    };
  }

  render() {
    const LoginButton = MKButton.coloredButton()
      .withText('Login')
      .withBackgroundColor(MKColor.Teal)
      .withOnPress(() => {
        Actions.login();
      })
      .withStyle(styles.login)
      .withTextStyle(styles.loginText)
      .build();

    const SignupButton = MKButton.coloredButton()
      .withText('Signup')
      .withBackgroundColor(MKColor.Blue)
      .withOnPress(() => {
        Actions.signup();
      })
      .withStyle(styles.signup)
      .withTextStyle(styles.signupText)
      .build();

    return (
      <View style={styles.container}>
        <Carousel
          delay={10000}
          style={this.state.size}
          autoplay={true}>
          <CarouselItem image={require('./1.jpg')} color={"#4CAF50"}></CarouselItem>
          <CarouselItem image={require('./2.jpg')} color={"#306b9f"}></CarouselItem>
          <CarouselItem image={require('./3.jpg')} color={"#009688"}></CarouselItem>
          <CarouselItem image={require('./4.jpg')} color={"#03A9F4"}></CarouselItem>
        </Carousel>
        <View style={styles.buttons}>
          <LoginButton/>
          <SignupButton/>
        </View>
      </View>
    );

  };

};
