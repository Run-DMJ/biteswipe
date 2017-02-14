import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

import { colors } from '../colors';

export const styles = StyleSheet.create({
  swipeViewBackground: {
    backgroundColor: '#F0F0F0', 
    flex: 1, 
    elevation:0
  },
  cardWrapper: {
    marginTop: 45,
    flex: 1,
    alignSelf: 'auto',
  },
  card: {
    elevation: 4,
    width: width * 0.85,
    height: height * 0.75,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    margin: 25,
    alignSelf: 'center'
  },
  cardContent: {
    paddingTop: 5,
    paddingBottom: 15,
    alignItems: 'center'
  },
  cardTitleContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 24,
    padding: 16,
  },
  cardSubTitle: {
    alignSelf: 'center',
    marginTop: 10,
    paddingTop: 0,
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 16
  },
  cardImage: {
    width: width * 0.85, 
    height: height * 0.45,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3
  },
  highlightsBox: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },
  yelpContainer: {
    alignItems: 'center',
    left: 30,
  },
  yelpButton: {
    padding: 2,
    backgroundColor:'#d32323',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    height: 60,
    width: 60,
    borderRadius: 30
  },
  yelpImg: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderRadius: 30
  },
  iconsBox: {
    backgroundColor: colors.lightPrimary,
    height: 40,
    minWidth: 40,
    marginLeft: 2,
    marginRight: 5,
    borderRadius: 5
  },
  highlightsBoxIcon: {
    width:40, 
    height:40
  },
  priceBox:{
    justifyContent: 'center',
    width: 80,
    height: 40,
    borderRadius: 2
  },
  priceBold: {
    textAlign: 'center',
    fontSize: 24,
    color: colors.primaryText,
  },
  priceLight: {
    fontSize: 20,
    color: colors.secondaryText,
  },
  distanceDot: {
    marginLeft: 5,
    backgroundColor: colors.darkPrimary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  distanceDotText: {
    lineHeight: 14
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 10
  }
})
