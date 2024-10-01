import React , { useEffect } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';


const LaunchScreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('WelcomeScreen');
          }, 2000);
          return () => clearTimeout(timer);
    }, [navigation]);



  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/logo/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default LaunchScreen;
