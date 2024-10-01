import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Font from "../components/Font";
import Input from "../components/Input";
import { CheckBox } from "react-native-elements";
import ButtonCustom from "../components/ButtonCustom";

const HorizontalLineWithText = ({ text }) => {
  return (
    <View style={styles.horizontalLineWithText}>
      <View style={styles.horizontalLine}></View>
      <Text style={styles.horizontalLineText}>{text}</Text>
      <View style={styles.horizontalLine}></View>
    </View>
  );
};

const LoginScreens = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/images/logo/logo.png")} />

      {/* Input */}
      <Font>
        <Text style={styles.loginText}>Login</Text>
      </Font>
      <Input placeholder="User name" iconName="user"></Input>
      <Input placeholder="Password" iconName="lock" iconRight={true}></Input>

      {/* Checkbox Remember me */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Remember me"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)} // Đổi trạng thái khi nhấn
          containerStyle={styles.checkbox}
          textStyle={styles.checkboxText}
        />
      </View>

      {/* Button Login*/}
      <ButtonCustom title="Login"></ButtonCustom>
      {/*forget password*/}
      <TouchableOpacity onPress={handleForgetPassword}>
        <Text style={styles.forgetText}>Forget the password?</Text>
      </TouchableOpacity>

      {/* HorizontalLineWithText */}
      <HorizontalLineWithText text="Or continute with"></HorizontalLineWithText>

      {/* orther Login */}
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <Image source={require("../assets/images/logo/google.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/logo/fb.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/logo/apple.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.forgetText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  loginText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: "SonsieOne",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "90%",
  },
  checkbox: {
    backgroundColor: "black",
    borderWidth: 0,
  },
  checkboxText: {
    color: "#FFD700",
    fontSize: 16,
  },
  forgetText: {
    color: "#FFD700",
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: "underline",
  },
  /* Thêm style cho HorizontalLineWithText */
  horizontalLineWithText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
  },
  horizontalLineText: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 10,
  },

  /* Thêm style cho logoContainer */
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 20,
  },
  /* Thêm style cho signupContainer */
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
    marginRight: 5,
  },
});
