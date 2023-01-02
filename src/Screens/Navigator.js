import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import useIdentStore from "../storages/IdentStore";

const MyGenie = () => {

  const navigation = useNavigation();

  const {trackingID, referenceID} = useIdentStore();

  const SliderNav = () => {
    navigation.navigate("Slider", {});
  };
  const MyGenieNav = () => {
    navigation.navigate("MyGenie", {});
  };
  const SplashNav = () => {
    navigation.navigate("Splash", {});
  };
  const AuthNav = () => {
    navigation.navigate("Auth", {});
  };
  const InfoNav = () => {
    navigation.navigate("Info", {});
  };
  const TestNav = () => {
    navigation.navigate("Test", {});
  };

  const LoadtNav = () => {
    navigation.navigate("Loading", {});
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Text>{trackingID} {referenceID}</Text>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={AuthNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Auth</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={SplashNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Splash</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={SliderNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Slider</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={MyGenieNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>MyGenie</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={InfoNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Info</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={TestNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>TEST</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={LoadtNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Loading</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={() => {console.log(trackingID); console.log(referenceID);}} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Console print Ident</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  Button: {
    width: "70%",
    backgroundColor: "#0779f3",
    padding: 7,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonContainer: {
    paddingTop: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyGenie;
