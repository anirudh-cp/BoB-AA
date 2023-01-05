import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

import BannerTop from "../assets/Images/BannerTop.png";
import useDataStore from "../storages/DataStore";


const Profile = () => {

  const { data } = useDataStore();
  
  const SumFunc = () => {
    let sum = 10;
    data.analytics.top5FundTransfer.CREDIT.overall.forEach((object) => {sum += object.amount;})
    return sum;
  }


  const accountDataGet = () => {
    let acc = [];
    try{
      acc = data.accounts[i].data.Profile.Holders.Holder[j].name;
      data.accounts[i].data.Account.Profile.Holders.Holder.name
    }
    catch(err)
    {
      acc = data[i].Profile.Holders.Holder[j].name
      data[i].Account.Profile.Holders.Holder.name
    }
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#a37bf4" translucent={true} />
      <ScrollView>
        {/* HEADER */}
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../assets/Images/1.png")}
              resizeMode="cover"
              style={{
                paddingTop: 5,
                height: 90,
              }}
            >
              {/* </View>
              <View style={{flex:1}}> */}
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "white",
                  marginTop: 13,
                  marginLeft: 17,
                }}
              >
                PROFILE
              </Text>
              <View
                style={[
                  styles.card,
                  {
                    height: 150,
                    width: "90%",
                    marginLeft: 17,
                    marginTop: 10,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                  },
                ]}
              ></View>
            </ImageBackground>
          </View>
        </View>

        {/* INFO DISPLAY */}
        
        {


        }
        <View
          style={[
            styles.card,
            styles.shadowProp,
            {
              height: 100,
              width: "91%",
              marginLeft: 15,
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              borderWidth: 2,
              borderColor: "#a37bf4",
              borderTopWidth: 0,
            },
          ]}
        >
          <Text style={{ fontSize: 16, marginBottom: 5 }}>
            Name : {data.accounts[0].data.Profile.Holders.Holder[0].name}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>
            Phone: {data.accounts[0].data.Profile.Holders.Holder[0].mobile}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>
            Email : {data.accounts[0].data.Profile.Holders.Holder[0].email}
          </Text>
        </View>

        {/* SETTINGS & PROFILE OPTIONS */}
        <View>
          <View style={{ marginLeft: 17, marginTop: 30 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 23, marginBottom: 10 }}
            >
              Accounts
            </Text>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#bebebe",
                marginTop: 5,
                padding: 13,
                width: "95%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                name="person"
                size={25}
                style={{
                  color: "black",
                  marginRight: 10,
                  flex: 1,
                }}
              />
              <Text style={{ flex: 3, fontSize: 15 }}>Edit Profile</Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#bebebe",
                marginTop: 5,
                padding: 13,
                width: "95%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                name="key"
                size={25}
                style={{
                  color: "black",
                  marginRight: 10,
                  flex: 1,
                }}
              />
              <Text style={{ flex: 3, fontSize: 15 }}>Manage Accounts</Text>
            </View>
          </View>
          <View style={{ marginLeft: 17, marginTop: 30 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 23, marginBottom: 10 }}
            >
              Settings
            </Text>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#bebebe",
                marginTop: 5,
                padding: 13,
                width: "95%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                name="cloud-done"
                size={25}
                style={{
                  color: "black",
                  marginRight: 10,
                  flex: 1,
                }}
              />
              <Text style={{ flex: 3, fontSize: 15 }}>Privacy Policy</Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#bebebe",
                marginTop: 5,
                padding: 13,
                width: "95%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                name="finger-print"
                size={25}
                style={{
                  color: "black",
                  marginRight: 10,
                  flex: 1,
                }}
              />
              <Text style={{ flex: 3, fontSize: 15 }}>Security</Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#bebebe",
                marginTop: 5,
                padding: 13,
                width: "95%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                name="call"
                size={25}
                style={{
                  color: "black",
                  marginRight: 10,
                  flex: 1,
                }}
              />
              <Text style={{ flex: 3, fontSize: 15 }}>Help & Support</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    //backgroundColor: "rgba(255,255,255,0.9)",
    backgroundColor: "white",
    borderRadius: 35,
    paddingLeft: 20,
    width: "85%",
    height: 400,
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
});

export default Profile;
