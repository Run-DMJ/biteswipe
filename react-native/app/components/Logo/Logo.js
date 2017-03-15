import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const Logo = props => {

	const {width, color, fontSize, textPadding, textColor} = props;

	const styles = StyleSheet.create({
		circle: {
			width: width,
			height: width,
			borderRadius: width / 2,
			backgroundColor: color
		},
		innerContainer: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center'
		},
		innerText: {
			fontSize: fontSize,
			textAlign: 'center',
			padding: textPadding,
			color: textColor
		},
		image: {
			width: width / 2,
			height: width / 3
		}
	});

	return (
		  <View style={styles.circle}>
		  	<View style={styles.innerContainer}>
				  <Text style={styles.innerText}>
				  	BiteSwipe
				  </Text>
				  <Image source={require('./biteswipe.png')} style={styles.image}/>
		  	</View>
		  </View>
		);
};

export default Logo;