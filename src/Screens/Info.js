import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import WaveTop from "../assets/Images/wave-top.png";
import WaveBottom from "../assets/Images/wave-bottom.png";
import Background from "../assets/Images/background.png";

const Info = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            width: "90%",
            height: 330,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={[styles.card, styles.shadowProp, styles.elevation]}>
            <Text style={{ fontSize: 35, fontWeight: "600", color: "#696969" }}>
              Enter Info
            </Text>
            <View style={[styles.textInputWrapper, { marginTop: "15%" }]}>
              <TextInput placeholder="Name" clearTextOnFocus={true} />
            </View>
            <View style={styles.textInputWrapper}>
              <TextInput placeholder="Email" clearTextOnFocus={true} />
            </View>
            <View
              style={{
                paddingTop: 12,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#0779f3",
                  padding: 7,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: "5%" }}>
          <Text>© 2022, PasiaGenie</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 35,
    paddingBottom: 45,
    paddingTop: 30,
    paddingHorizontal: 30,
    width: "85%",
    marginVertical: 10,
    flex: 4,
  },
  shadowProp: {
    shadowColor: "#17171",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  textInputWrapper: {
    borderWidth: 1,
    borderColor: "grey",
    width: "100%",
    borderRadius: 10,
    paddingLeft: 13,
    padding: 3,
    marginTop: "6%",
  },
});

export default Info;
