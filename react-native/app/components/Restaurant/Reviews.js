import React, {Component} from 'react';

import {
  Text, Image, ScrollView
} from 'react-native';
import { View } from 'native-base';
import TimeAgo from 'react-native-timeago';

import { styles } from './styles';

export default class Reviews extends Component {
  render() {
    return (
    <ScrollView style={styles.tab}>
      <View style={styles.scrollItem}>
        {
          this.props.reviews.map( (review, index) => {
            return (
            <View key={index} style={styles.card}>
              <View style={styles.reviewHeader}>
                <Image
                  source={{uri: review.user.image_url}}
                  style={styles.reviewImage} />
              </View>
              <Text style={styles.reviewName}><Text style={styles.tabTitle}>{review.user.name}</Text> <TimeAgo time={review.time_created} /></Text>
              <Text style={styles.pushDown}>{review.text}</Text>
              <Text>Rating: {review.rating}</Text>
            </View>
            )
          })
        }
      </View>
    </ScrollView>
    );
  };
};
