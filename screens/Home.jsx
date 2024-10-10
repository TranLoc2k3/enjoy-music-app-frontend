import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
    GoogleSignin,
    isErrorWithCode,
    statusCodes,
    GoogleSigninButton,
  } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const Home = ({navigation}) => {

    // Có thể lấy thông tin user đã xác thực thông qua auth() để hiển thị những chổ profile cũng dc
    const getCurrentUser = () => {
        const user = auth().currentUser;
        // if (user) {
        //   console.log('User Email:', user.email);
        //   console.log('User UID:', user.uid);
        //   console.log('User Display Name:', user.displayName);
        //   console.log('User Photo URL:', user.photoURL);
        // } else {
        //   console.log('No user is signed in.');
        // }
      };
    
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => {
                    getCurrentUser();
                    auth().signOut();
                    GoogleSignin.revokeAccess();
                    navigation.navigate('LoginScreen');
                }}
            >
                <Text>Sign-out</Text>
            </TouchableOpacity>
        </View>
  )
}

export default Home;