import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../colors';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  NavBar: {
    backgroundColor: colors.primary, 
    elevation: 0,
  }
});