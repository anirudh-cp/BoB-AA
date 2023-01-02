import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

import Logo from "../assets/Images/final_1.png";
import PaisaGenie from "../assets/Images/name.png";

const Splash = () => {
  const navigation = useNavigation();

  // Function that automatically redirects to the Auth page after 5.5s
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Auth", {});
    }, 5500);
  });

  return (
    // Wrapper for the entire page
    <SafeAreaView style={{ flexDirection: "column", flex: 1 }}>
      {/* Wrapper for the "Paisa Genie name" */}
      <View style={styles.nameWrapper}>
        <Image
          source={PaisaGenie}
          resizeMode="contain"
          style={{ width: "80%", height: "55%" }}
        ></Image>
      </View>

      {/* Wrapper for the text below the name logo */}
      <View
        style={[
          styles.nameWrapper,
          { flex: 1, justifyContent: "flex-start", backgroundColor: "#a37bf4" },
        ]}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontFamily: "sans-serif",
          }}
        >
          One-stop Financial Genie at Your Fingertips
        </Text>
      </View>

      {/* Wrapper for the actual genie lamp logo */}
      <View style={styles.logoWrapper}>
        <Image
          source={Logo}
          resizeMode="contain"
          style={{ height: "90%" }}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

// Custom styling as referenced above
const styles = StyleSheet.create({
  logoWrapper: {
    flex: 7,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#a37bf4",
  },
  // 0779f3
  nameWrapper: {
    flex: 2,
    backgroundColor: "#a37bf4",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
});

export default Splash;
