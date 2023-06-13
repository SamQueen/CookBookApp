import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

// custom imports
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

const windowWidth = Dimensions.get('window').width;
const deviceType = (windowWidth < 500) ? 'mobile' : 'web';

export default function Login({navigation}) {
	const login = () => {
		navigation.navigate('MainScreen');
	}

	return (
		<View style={styles.container}>
			<View style={styles.loginContainer}>
				<Text style={styles.loginHeader}> Sign In</Text>

				<View style={styles.inputArea}>
					<Text>Email</Text>
					<Input 
						secureEntry={false}
					/>
				</View>

				<View style={styles.inputArea}>
					<Text>Password</Text>
					<Input 
					secureEntry={true}
					/>
				</View>

				<CustomButton 
					onPress={login}
				/>

				<Text style={styles.createAccount}>Don't have an account? Create one! {windowWidth}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loginContainer: {
		flex: 1,
		padding: '2%',
		width: (deviceType === 'web') ? 450 : 300,
		marginVertical: 180,
	},
	loginHeader: {
		paddingBottom: '15%',
		textAlign: 'center',
		fontSize: 40,
	},
	inputArea: {
		paddingBottom: '5%',
	},
	createAccount: {
		marginTop: '7%',
	},
});
