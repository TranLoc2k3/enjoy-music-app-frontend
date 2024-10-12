import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Home = ({ navigation }) => {

  // Function to get current user details (if needed)
  // const getCurrentUser = () => {
  //   const user = auth().currentUser;
  //   if (user) {
  //     console.log('User Email:', user.email);
  //     console.log('User UID:', user.uid);
  //     console.log('User Display Name:', user.displayName);
  //     console.log('User Photo URL:', user.photoURL);
  //   } else {
  //     console.log('No user is signed in.');
  //   }
  // };

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      const currentUser = auth().currentUser;

      if (!currentUser) {
        throw new Error('No user is currently signed in.');
      }

      // Check if the user signed in using Google
      const isGoogleUser = currentUser.providerData.some(
        provider => provider.providerId === 'google.com'
      );

      if (isGoogleUser) {
        try {
          // Revoke Google access if user logged in with Google
          await GoogleSignin.revokeAccess();
          console.log('Google access revoked.');
        } catch (error) {
          console.error('Failed to revoke Google access:', error);
          Alert.alert('Error', 'Failed to revoke Google access.');
        }
      } 

      // Sign out the user from Firebase
      await auth().signOut();

      // Navigate to the Login screen after signing out
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error during sign out:', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign-out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
