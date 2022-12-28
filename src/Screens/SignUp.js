import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Linking } from "react-native";

import useConsent from "../utils/Consent";


export default function SignUp({ navigation }) {

  const [text, onChangeText] = useState("9987600001");

  const { getConsent } = useConsent();

  const handleLogin = async (phone) => {
    console.log("Get consent for user phone number " + phone);
    const response = await getConsent(phone);

    if (response["code"] === 200) {
      console.log("Consent retrival success!");
      Linking.openURL(response.data.redirectionUrl).catch(err => console.error("Couldn't load page", err));
      navigation.push('Home');
    }
    else {
      console.error("Consent retrival failure! " + response.code);
      console.error(JSON.stringify(response.data));
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={"Phone Number"}
        keyboardType={"number-pad"}
      />
      <Button title="Submit" onPress={() => {
        handleLogin(text);
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
