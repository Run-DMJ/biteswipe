import React, {Component} from 'react';
import {Toolbar} from 'react-native-material-design';
import {Actions} from 'react-native-router-flux';
import { colors } from '../colors';
import {styles} from './styles';
import {BackAndroid} from 'react-native';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.clearTemporarySettings = this.clearTemporarySettings.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener("hardwareBackPress", () => {
      this.clearTemporarySettings();
    });
  }

  clearTemporarySettings() {
    // clear all temporary filter settings on back
    if(this.props.current.name === 'filter') {
      this.props.setTemporaryCategories(null);
      this.props.setTemporaryRadius(null);
      this.props.setTemporaryPriceRange(null);
    };
  }

  render() {
    const navigationState = this.props.navigationState;
    const current = this.props.current;

    const open = () => {
      Actions.refresh({ key: navigationState.key, open: value => !value });
    };

    const back = () => {
      this.clearTemporarySettings();
      Actions.pop();
    };

    let title;
    let icon;
    let onIconPress;

    switch(current.name) {
      case 'swipe':
        title = current.title;
        icon = 'menu';
        onIconPress = open;
        break;
      case 'restaurant':
        title = current.selectedRestaurant.name || 'No restaurant selected';
        icon = 'keyboard-backspace';
        onIconPress = back;
        break;
      default:
        title = current.title;
        icon = 'keyboard-backspace';
        onIconPress = back;
        break;
    };

    const actions = (this.props.tab === 1 && current.name === 'swipe') ? [{ icon: 'delete', onPress: this.props.clearResults}] : [];

    return (
      <Toolbar
          title={title}
          icon={icon}
          onIconPress={onIconPress}
          actions={actions}
          style={styles.NavBar}
          rightIconStyle={{
              marginRight: 20
          }}
          overrides={{
            color: colors.primaryText,
            leftIconColor: colors.primaryText,
            rightIconColor: colors.primaryText,
          }}
      />
    );
  }

};