import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Font from "../components/Font";
import ButtonCustom from "../components/ButtonCustom";

const VerifyCodeScreen = ({navigation}) => {
    const handleNewPassword = () => {
        navigation.navigate('NewPasswordScreen');
    }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo/logo.png")} />
      <Font>
        <Text style={styles.verifyCode}>Verify Code</Text>
      </Font>
      <Text style={styles.verifyText}>
        Please enter the code we just send to mail example@gmail.com
      </Text>
      {/* Verify code */}

      <View style={styles.verifyCodeContainer}>
        <TextInput style={styles.verifyInput}></TextInput>
        <TextInput style={styles.verifyInput}></TextInput>
        <TextInput style={styles.verifyInput}></TextInput>
        <TextInput style={styles.verifyInput}></TextInput>
        <TextInput style={styles.verifyInput}></TextInput>
        <TextInput style={styles.verifyInput}></TextInput>
      </View>

      <Text style={styles.noRecevieCode}>
        Didn't receive the code?
      </Text>
      <TouchableOpacity >
        <Text style={styles.resendText}>Resend</Text>
      </TouchableOpacity>

        <ButtonCustom title="Verify" onPress={handleNewPassword}></ButtonCustom>

    </View>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  verifyCode: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: "SonsieOne",
  },
  verifyText: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    width: "90%",
  },
  verifyCodeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  verifyInput: {
    width: "10%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 8,
    backgroundColor:'black',
    color:'white',
    borderWidth:1,
    borderColor:'#FFD700',
    fontSize:30,
    textAlign:'center',
  },
    noRecevieCode: {
        color: "white",
        fontSize: 16,
        marginTop: 20,
    },
    resendText: {
        color: "#FFD700",
        fontSize: 16,
        textDecorationLine: "underline",
        marginBottom: 20,
    },
});
