import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Font from "../components/Font";
import Input from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";

const SignUpScreen = ({navigation}) => {
    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo/logo.png")} />
      <Font>
        <Text style={styles.signupText}>Sign Up</Text>
      </Font>
      {/* Input */}
      <Input placeholder="User name" iconName="user"></Input>
      <Input placeholder="Email" iconName="mail"></Input>
      <Input placeholder="Password" iconName="lock" iconRight={true}></Input>
      <Input
        placeholder="Confirm Password"
        iconName="lock"
        iconRight={true}
      ></Input>

      {/* Button Sign Up*/}
      <View style={styles.buttonContainer}>
        <ButtonCustom title="Sign Up"></ButtonCustom>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.accountText}>I have an account already ?</Text>
        <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  signupText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: "SonsieOne",
  },
    buttonContainer: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
    },
    accountText: {
        color: "white",
        fontSize: 16,
        marginRight: 5,
    },
    loginText: {
        color: "#FFD700",
        fontSize: 16,
        fontWeight: "bold",
    },
    loginContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
});
