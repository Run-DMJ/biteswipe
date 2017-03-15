import React, {Component} from 'react';
import {View, WebView} from 'react-native';

import styles from './styles';

export default class Privacy extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<WebView style={styles.webView} source={require('./privacy.html')}></WebView>
			</View>
			);
	}

}