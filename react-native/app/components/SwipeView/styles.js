import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../colors';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  swipeViewBackground: {
    backgroundColor: colors.background,
    flex:1,
    elevation:0,
  },
  cardWrapper: {
    marginTop: 45,
    flex: 1,
    alignSelf: 'auto',
  },
  card: {
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: width*.85,
    borderRadius: 3,
    backgroundColor: colors.pureWhite,
    marginTop:25,
    alignSelf: 'center',
  },
  cardContent: {
    paddingTop: 5,
    paddingBottom: 15,
    alignItems: 'center',
  },
  cardTitle: {
    backgroundColor: "transparent",
    color: colors.pureWhite,
    fontSize: 24,
    padding: 16,
    position: "absolute",
    top: 300
  },
  cardSubTitle: {
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0
  },
  cardImage: {
    width: 350,
    height: 350,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  imageGradient: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 200,
  },


  yelpImg: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  yelpContainer: {
    alignItems: 'center',
    left: 30,
  },
  yelpButton: {
    padding:2,
    backgroundColor:'#d32323',
    elevation: 4,
  },


  highlightsBox: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    elevation: 4,
  },
  iconsBox: {
    backgroundColor: colors.lightPrimary,
    height: 40,
    minWidth: 40,
    marginLeft: 2,
    marginRight: 5,
    borderRadius: 5,
  },
  highlightsBoxIcon: {
    width:40,
    height:40,
  },
  priceBox:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 40,
    borderRadius: 2,
  },
  priceBold: {
    fontSize: 19,
    color: colors.primaryText,
  },
  priceLight: {
    fontSize: 19,
    color: colors.secondaryText,
  },

  distanceDot: {
    marginLeft: 5,
    backgroundColor: colors.accent,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: colors.darkPrimary,
  },
  distanceDotText: {
    lineHeight: 14
  },

  ratingView: {
    flexDirection: 'row',
  },

  ratingView: {
  }

})
