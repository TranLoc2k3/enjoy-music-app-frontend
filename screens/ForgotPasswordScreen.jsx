import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Font from "../components/Font";
import Input from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";

const ForgotPasswordScreen = ({navigation}) => {
    const handleVerifyCode = () => {
        navigation.navigate('VerifyCodeScreen');
      }
   
      
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo/logo.png")} />
      <Font>
        <Text style={styles.forgotText}>Forgot Password</Text>
      </Font>
      <Text style={styles.forgotInfoText}>
        Please enter your email address. You will receive a link to create a new
        password via email.
      </Text>
      {/* Input */}
      <Input placeholder="Email" iconName="mail" iconRight={false}></Input>
      <TouchableOpacity style={styles.otherWayContainer} > 
        <Text style={styles.ortherWayText}>Try another way</Text>
        </TouchableOpacity>

    <ButtonCustom title="Send" onPress={handleVerifyCode}></ButtonCustom>

    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  forgotText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: "SonsieOne",
  },
  forgotInfoText: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    width: "90%",
  },
  ortherWayText: {
    color: "#FFD700",
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: "underline",
  },
  otherWayContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});
