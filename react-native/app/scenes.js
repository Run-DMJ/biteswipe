import React from 'react';
import {connect} from 'react-redux';
import {Switch, Actions, Scene, ActionConst} from 'react-native-router-flux';

import Splash from './components/Splash';
import Login from './components/Login';
import Signup from './components/Signup';

import Container from './components/Container';
import TabBar from './components/TabBar';
import Categories from './components/Categories/';
import AdditionalCategories from './components/AdditionalCategories/';
import Filter from './components/Filter';
import Restaurant from './components/Restaurant';
import Privacy from './components/Privacy';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const connectedSwitch = connect(mapStateToProps)(Switch);

const selector = props => (props.loggedIn ? 'loggedIn' : 'notLoggedIn');

const scenes = Actions.create(
  <Scene key="root" component={connectedSwitch} selector={selector} tabs>

    <Scene key="notLoggedIn">
      <Scene key="splash" component={Splash} title="Splash" hideNavBar initial/>
      <Scene key="login" component={Login} title="Login" hideNavBar={false}/>
      <Scene key="signup" component={Signup} title="Signup" hideNavBar={false}/>
    </Scene>

    <Scene key="loggedIn" component={Container} open={false} hideNavBar>
      <Scene key="swipe" component={TabBar} title="BiteSwipe" initial/>
      <Scene key="categories" component={Categories} title="Categories"/>
      <Scene key="additionalcategories" component={AdditionalCategories} title="Additional Categories"/>
      <Scene key="filter" component={Filter} title="Search Settings"/>
      <Scene key="restaurant" component={Restaurant} hideNavBar={false} title="Restaurant"/>
      <Scene key="privacy" component={Privacy} title="Privacy Policy"/>
    </Scene>

  </Scene>
);

export default scenes;