import React from 'react';
import {Linking, View, Text, Image} from 'react-native';
import {Avatar, Drawer as MaterialDrawer, Divider, COLOR, TYPO} from 'react-native-material-design';
import {Actions} from 'react-native-router-flux';
import TimerMixin from 'react-timer-mixin';
import {CONTACT} from '../../constants';

import styles from './styles';

// must use createClass to incorporate mixins
const Drawer = React.createClass({
	mixins: [TimerMixin],

	onPress(type) {
		const drawer = this.props.drawer;
		drawer.close();
		// wait for drawer to close
		this.setTimeout(() => {
			switch(type) {
				case 'biteswipe':
					Actions.swipe();
					break;
				case 'search':
					Actions.filter();
					break;
				case 'contact':
					Linking.openURL(`mailto:${CONTACT}`);
					break;
				case 'privacy':
					Actions.privacy();
					break;
				case 'logout':
					this.props.logout();
					break;
			};
		}, 300);
	},

	onLongPress(type) {
		this.onPress(type);
	},

	render() {

		const user = this.props.user;
		const profileName = user ? (user.name || user.email) : 'Vlad Pudding';

		return (
		    <MaterialDrawer theme='light'>
		        <MaterialDrawer.Header image={<Image source={require('./nav.jpg')} />}>
		            <View style={styles.header}>
		            	<Avatar size={80} image={<Image source={{ uri: "https://theduran.com/wp-content/uploads/2016/12/putin-winking.jpg" }}/>} />
		              <Text style={[styles.headerText, COLOR.paperGrey50, TYPO.paperFontSubhead]}>{profileName}</Text>
		            </View>
		        </MaterialDrawer.Header>

		        <MaterialDrawer.Section
		            items={[
	            		{
	            	    value: 'BiteSwipe',
	            	    onPress: () => this.onPress('biteswipe'),
	            	    onLongPress: () => this.onLongPress('biteswipe')
	            	  },
		            	{
		                value: 'Search Settings',
		                onPress: () => this.onPress('search'),
		                onLongPress: () => this.onLongPress('search')
		              },
	              	{
	                  value: 'Contact',
	                  onPress: () => this.onPress('contact'),
	                  onLongPress: () => this.onLongPress('contact')
	                },
                	{
                    value: 'Privacy Policy',
                    onPress: () => this.onPress('privacy'),
                    onLongPress: () => this.onLongPress('privacy')
                  }
		            ]}
		        />
		        <Divider style={styles.divider}/>
		        <MaterialDrawer.Section
		        	items={[
		        			{
		        		    value: 'Logout',
		        		    onPress: () => this.onPress('logout'),
		        		    onLongPress: () => this.onLongPress('logout')
		        		  }
		        		]}
		        />
		    </MaterialDrawer>
		);
	}
});

export default Drawer;
