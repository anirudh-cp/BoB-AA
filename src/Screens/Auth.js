import { View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";

import Banner from "../assets/Images/banner.png";

import useConsent from "../utils/Consent";
import * as WebBrowser from 'expo-web-browser';


const Auth = ({ navigation }) => {

  const [text, setText] = useState("9987600001");

  const { getConsent } = useConsent();

  const handleLogin = async (phone) => {
    console.log("Get consent for user phone number " + phone);
    const response = await getConsent(phone);

    if (response["code"] === 200) {
      console.log("Consent redirecton success!");
      // Linking.openURL(response.data.redirectionUrl).catch(err => console.error("Couldn't load page", err));
      let result = await  WebBrowser.openAuthSessionAsync(response.data.redirectionUrl)
      console.log(result);
      navigation.push('Loading');
    }
    else {
      console.error("Consent redirecton failure! " + response.code);
      console.error(JSON.stringify(response.data));
    }
  }


  return (
    // Wrapper for the entire page
    <SafeAreaView style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }} >

      {/* Image wrapper for the genie and 6 icons */}
      <View style={{
        flex: 5,
        backgroundColor: '#0779f3',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
        <Image source={Banner} resizeMode='cover' style={{ width: '100%', height: '100%', justifyContent: 'flex-start' }} />
      </View>

      {/* Wrapper for the rest of the content below the banner */}
      <View style={{
        flex: 4,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 23, paddingTop: 20 }} >The One-Stop Advisor for all your</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 23, paddingBottom: 25 }} >Financial Needs</Text>

        {/* View for the Login or Sign Up text, with the line */}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 30 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#525252' }} />
          <View><Text style={{ width: 120, textAlign: 'center', color: '#525252' }}>Log in or Sign Up</Text></View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#525252' }} />
        </View>

        {/* Phone no input with styling*/}
        <View style={{ borderWidth: 1, borderColor: 'grey', width: '70%', borderRadius: 10, paddingLeft: 13, padding: 3 }}>
          <TextInput placeholder="Enter Phone Number" clearTextOnFocus={true}
            keyboardType="number-pad" onChangeText={setText}
            value={text}
          />
        </View>

        {/* Continue button for input acceptance*/}
        <View style={{ paddingTop: 12, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{
            width: '70%', backgroundColor: '#0779f3',
            padding: 7, borderRadius: 10,
            justifyContent: 'center', alignItems: 'center'
          }}
            onPress={() => { handleLogin(text); }}
          >
            <Text style={{ color: 'white', fontSize: 15 }}>Continue</Text>
          </TouchableOpacity>
        </View>

        {/* Disclaimer texts at the bottom of the screen */}
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '11%' }}>
          <Text style={{ fontSize: 10 }}>By continuing, you agree to our</Text>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity><Text style={{ fontSize: 10, flex: 1 }}>Terms of Service  </Text></TouchableOpacity>
            <TouchableOpacity><Text style={{ fontSize: 10, flex: 1 }}>Privacy Policy  </Text></TouchableOpacity>
            <TouchableOpacity><Text style={{ fontSize: 10, flex: 1 }}>Content Policy  </Text></TouchableOpacity>
          </View>
        </View>

      </View>


    </SafeAreaView>
  );
};

export default Auth;
