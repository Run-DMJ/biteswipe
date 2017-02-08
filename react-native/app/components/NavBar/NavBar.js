import React from 'react';
import {Toolbar} from 'react-native-material-design';
import {Actions} from 'react-native-router-flux';

import {styles} from './styles';

const NavBar = props => {

  const navigationState = props.navigationState;
  const current = props.current;

  const open = () => {
    Actions.refresh({ key: navigationState.key, open: value => !value });
  };

  const back = () => {
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
      title = current.restaurant.name || 'No restaurant selected';
      icon = 'keyboard-backspace';
      onIconPress = back;
      break;
    default:
      title = current.title;
      icon = 'keyboard-backspace';
      onIconPress = back;
      break;
  };

  return (
  	<Toolbar
  	    title={title}
  	    icon={icon}
  	    onIconPress={onIconPress}
        style={styles.NavBar}
  	/>
  );
};

export default NavBar;