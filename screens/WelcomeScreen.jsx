import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Font from "../components/Font";

const WellcomScreen = ({ navigation }) => {
  const startedHandle = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/background/welcome.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.welcomeTextContainer}>
        <Font>
          <Text style={styles.welcomeText}>
            From the <Text style={styles.highlighText}>latest</Text> to the{" "}
            <Text style={styles.highlighText}>greatest</Text> hits, play your
            favorite tracks on{" "}
            <Text style={styles.nameAppText}>EnjoyMusic</Text>
          </Text>
          <Text style={styles.nowText}>Now!</Text>
        </Font>
        <TouchableOpacity style={styles.button} onPress={startedHandle}>
          <Text style={styles.welcomeText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WellcomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 5,
    justifyContent: "flex-end",
  },
  image: {
    width: 275,
    height: 361,
  },
  welcomeTextContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C7253E",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
  },
  welcomeText: {
    color: "white",
    fontSize: 27,
    textAlign: "center",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
  highlighText: {
    color: "#FFD700",
  },
  nameAppText: {
    fontFamily: "SonsieOne",
    color: "#FFD700",
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 5,
    borderRadius: 50,
    height: 50,
    width: "80%",
    justifyContent: "center",
  },
  nowText: {
    color: "white",
    fontSize: 27,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
   
  },
});
