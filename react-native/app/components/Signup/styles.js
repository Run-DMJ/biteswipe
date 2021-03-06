import {
  Dimensions,
  Platform,
	StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get('window');
const offset = Platform.OS === 'ios' ? 64 : 54;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6'
  },
  card: {
    width: width * 0.90,
    marginTop: width * 0.05 + offset,
    marginLeft: width * 0.05,
    padding: 20
  },
  signup: {
    backgroundColor: '#009688',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30
  }
});