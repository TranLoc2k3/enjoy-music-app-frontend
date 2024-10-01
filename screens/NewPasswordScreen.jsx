import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Font from "../components/Font";
import Input from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";

const NewPasswordScreen = ({navigation}) => {
    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo/logo.png")} />
      <Font>
        <Text style={styles.newPasswordText}>New Password</Text>
      </Font>
      <Text style={styles.newPasswordInfoText}>
        Your new password must be different from previously used passwords
      </Text>
      <Input
        placeholder="New Password"
        iconName="lock"
        iconRight={true}
      ></Input>
      <Input
        placeholder="Confirm Password"
        iconName="lock"
        iconRight={true}
      ></Input>
      <View style={styles.buttonContainer}>
        <ButtonCustom title="Create new password" onPress={handleLogin}></ButtonCustom>
      </View>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  newPasswordText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: "SonsieOne",
  },
  newPasswordInfoText: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    width: "90%",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
});
