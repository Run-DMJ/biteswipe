import {
  Dimensions,
	StyleSheet
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  login: {
    width: width / 2,
    height: height / 10,
    borderRadius: 0,
  },
  loginText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  },
  signup: {
    width: width / 2,
    height: height / 10,
    borderRadius: 0,
  },
  signupText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  }
});