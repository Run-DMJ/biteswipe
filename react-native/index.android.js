import React, { Component } from 'react';
import {AppRegistry, View, StyleSheet, Linking, AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/store';
import {Router} from 'react-native-router-flux';
import queryString from 'query-string';
import {persistStore} from 'redux-persist';

import LoadingSplash from './app/components/LoadingSplash';

import {colors} from './app/components/colors';

import {receiveRefreshToken, receiveAccessToken, updateLoggedIn} from './app/action-creators/auth';
import scenes from './app/scenes';

export default class BiteSwipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rehydrated: false,
      animated: false
    };
    this.animationCompleted = this.animationCompleted.bind(this);
  }

  componentWillMount() {
    persistStore(store, {storage: AsyncStorage}, () => {
      this.setState({
        rehydrated: true
      });
    });
  }

  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleDeepLink({ url });
      };
    });
  }

  _handleOpenURL(event) {
    const obj = queryString.parse(event.url.replace('biteswipe://callback?', ''));
    if(obj.refreshToken && obj.accessToken) {
      store.dispatch(receiveRefreshToken(obj.refreshToken));
      store.dispatch(receiveAccessToken(obj.accessToken));
      store.dispatch(updateLoggedIn(true));
    }
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  animationCompleted() {
    this.setState({
      animated: true
    })
  }

  render() {
    if(!this.state.rehydrated || !this.state.animated) {
      return (
        <LoadingSplash animationCompleted={this.animationCompleted}/>
        );
    } else {
      return (
          <Provider store={store}>
            <Router
              navigationBarStyle={styles.navBar}
              titleStyle={styles.navTitle}
              barButtonIconStyle={styles.navBarButton}
              scenes={scenes}/>
          </Provider>
        );
    }
  }
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.primary
  },
  navTitle: {
    color: 'white'
  },
  navBarButton: {
    tintColor: 'white'
  }
});

AppRegistry.registerComponent('BiteSwipe', () => BiteSwipe);
