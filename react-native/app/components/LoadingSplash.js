import React, {Component} from 'react';

import {
  View,
  Animated,
  Dimensions,
  StyleSheet
} from 'react-native';

import Logo from './Logo';

export default class LoadingSplash extends Component {
	constructor(props) {
		super(props);
		this.springValue = new Animated.Value(0.5);
	}

	componentDidMount() {
		Animated.spring(
		  this.springValue,
		  {
		    toValue: 1,
		    friction: 1
		  }
		).start(() => this.props.animationCompleted());
	}

	render() {
		return (
			<View style={styles.container}>
				<Animated.View style={{ transform: [{scale: this.springValue}] }}>
					<Logo width={width / 3} color="#5f888b" fontSize={20} textPadding={5} textColor="white"/>
				</Animated.View>
			</View>
			);
	}
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#607D8B'
	}
});
