import React from 'react';

import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export const HighlightsBox = props => {

  displayIcons = () => {
    let hasBooze = (category) => {
      return (category.alias === 'bars' 
        || category.alias === 'sportsbars' 
        || category.alias === 'irish_pubs') 
    }

    let hasPizza = (category) => {
      return (category.alias === 'bars' 
        || category.alias === 'sportsbars' 
        || category.alias === 'irish_pubs') 
    }

    if(props.restaurant.categories.some(hasBooze)) {
      return(<Image source={require('./img/beer_ico.png')} style={styles.highlightsBoxIcon} />);
    } else {
      return(<Image style={styles.highlightsBoxIcon} />);
    }
  }

  formatPrice = () => {
    let n = props.restaurant.price.length;
    return (
      <View style={styles.priceBox}>
        <Text style={styles.priceBold}>{'$'.repeat(n)}<Text style={styles.priceLight}>{'$'.repeat(4-n)}</Text></Text>
      </View>
      );
  }

  let distance = (props.restaurant.distance * 0.000621371);
  distance = (distance > 10) ? Math.round(distance) : distance.toFixed(1);

  return (
    <View style={styles.highlightsBox}>
      <View style={styles.iconsBox}>
        {displayIcons()}
      </View>
      {formatPrice()}
      <View style={styles.distanceDot}>
        <Text style={styles.distanceDotText}>{distance}</Text>
        <Text style={styles.distanceDotText}>mi.</Text>
      </View>
    </View>
  )   
}
