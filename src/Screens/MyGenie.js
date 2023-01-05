import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryTheme,
} from "victory-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import DropdownComponent1 from "../components/DropdownComponent1"
import DropdownComponent2 from "../components/DropdownComponent2"

import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Alert,
  Modal,
  Pressable,
} from "react-native";

import BannerTop from "../assets/Images/BannerTop.png";


const MyGenie = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  function showUnits(num){
    if(num<100000){
        console.log((num/1000).toFixed(2) + "K");
    }
    else if(num>=100000 && num<10000000){
        console.log((num/100000).toFixed(2) + "L");
    } 
    else if(num>=10000000){
        console.log((num/10000000).toFixed(2) + "C");
    }
  }

  return (
    <SafeAreaView style={{ marginBottom: 55 }}>
      <ScrollView>
        {/* MODAL FOR GOAL SETTING */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
          <View
          style={{
            width: "90%",
            height: 540,
            justifyContent: "center",
            alignItems: "center",
          }}
          >
          <View style={[styles.card, styles.shadowProp, styles.elevation]}>
            <Text style={{ fontSize: 35, color: "black", marginLeft:10, marginBottom:20, marginTop:10 }}>
              Enter Info
            </Text>
            <View style={{width:'90%'}}>
              <DropdownComponent1/>
              {/* NEW COMPONENT TO BE DYNAMICALLY GENERATED, WITH EACH CATEGORY FROM COMPLETECATEGORYWISE ANALYSIS */}
              {/* THE ADD BUTTON FOR NOW, CLOSES THE MODAL, BUT SHOULD ADD A NEW GOAL */}
              <DropdownComponent1/>
              {/* DICTATES LESS/MORE/EQUAL */}
              <DropdownComponent2/>
            </View>
            <View style={{width:'90%', justifyContent: 'center', marginLeft:15, margin:0, padding:0}}>
              <View style={[styles.textInputWrapper, { marginTop: "8%" }]}>
                <TextInput placeholder="Value" clearTextOnFocus={true}/>
              </View>
            </View>
            
            <View
              style={{
                paddingTop: 12,
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
                marginLeft:8
              }}
            >
              <TouchableOpacity
                style={{
                  width: "90%",
                  backgroundColor: "#0779f3",
                  padding: 7,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight:5
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={{ color: "white", fontSize: 15 }}>Add Goal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
          </View>
        </Modal>
      </View>
        
        <StatusBar backgroundColor="#a37bf4" translucent={true} />

        {/*HEADER BACKGROUND*/}
        <ImageBackground
          source={require("../assets/Images/1.png")}
          resizeMode="cover"
          style={{
            justifyContent: "flex-start",
            paddingBottom: 20,
            paddingTop: 5,
          }}
        >
          {/* HELLO MESSAGE */}
          <View
            style={{
              margin: 12,
              marginBottom: 8,
              marginTop: 0,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
            >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, color: "white" }}>Hello,</Text>
              <Text style={{ fontSize: 18, color: "white" }}>
                TARUN GOPINATH
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={ () => navigation.navigate("Profile", {}) }>
              <Ionicons
                name="person"
                size={25}
                style={{
                  color: "white",
                  marginRight: 10,
                }}
              />
              </TouchableOpacity>
            </View>
          </View>
          {/* END OF HEADER */}

          {/*COLLECTIVE ANALYSIS HORIZONTAL SCROLL DISPLAY */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
            >
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
              >
              <Text style={{ fontSize: 33 }}>2.12 Cr</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.2,12,71,895
              </Text>
              <Text
                style={{
                  marginLeft: 6,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                NET WORTH
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 33 }}>2.06 L</Text>
                <Text
                  style={{
                    marginLeft: 0,
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#713ADF",
                  }}
                >
                  A/C BALANCE
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>9.16 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    DEBIT
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>11.22 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    CREDIT
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
              >
              <Text style={{ fontSize: 33 }}>15.08 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.15,088
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                DEPOSIT VAL
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>2.87 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.2,87,624
              </Text>
              <Text
                style={{
                  marginLeft: 9,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                EQUITY VAL
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              {/* closing units * nav */}
              <Text style={{ fontSize: 33 }}>2.6 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.2,600
              </Text>
              <Text
                style={{
                  marginLeft: 0,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                MUTUAL FUND
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>14.26 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.14,26,495
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                PENSION VAL
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>35 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.35,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                RD VALUE
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>1 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.1,00,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                TD VALUE
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>

        {/*OPTIONS DISPLAY */}
        <View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              style={[
                styles.OptionButton,
                { marginLeft: 6, flexDirection: "row" },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Ionicons name="cube" size={17} style={styles.OptionIcon} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ color: "#9064E8", fontSize: 14 }}>
                  BANK ACCOUNT
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.OptionButton,
                { marginLeft: 6, flexDirection: "row" },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Ionicons name="book" size={17} style={styles.OptionIcon} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ color: "#9064E8", fontSize: 14 }}>DEPOSITS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={[
                styles.OptionButton,
                { marginLeft: 6, flexDirection: "row" },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Ionicons name="business" size={17} style={styles.OptionIcon} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ color: "#9064E8", fontSize: 14 }}>EQUITIES</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.OptionButton,
                { marginLeft: 6, flexDirection: "row" },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Ionicons
                  name="checkmark-circle"
                  size={17}
                  style={styles.OptionIcon}
                />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ color: "#9064E8", fontSize: 14 }}>
                  INSURANCE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={[
                styles.OptionButton,
                { marginLeft: 6, flexDirection: "row" },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Ionicons
                  name="briefcase"
                  size={17}
                  style={styles.OptionIcon}
                />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ color: "#9064E8", fontSize: 14 }}>
                  MUTUAL FUNDS
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.OptionButton,
                { marginLeft: 6, flexDirection: "row" },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Ionicons name="bookmark" size={17} style={styles.OptionIcon} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ color: "#9064E8", fontSize: 14 }}>
                  PENSION SCHEME
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={[
                styles.OptionButton,
                { marginLeft: 6, flexDirection: "row" },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Ionicons name="card" size={17} style={styles.OptionIcon} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ color: "#9064E8", fontSize: 14 }}>
                  RECURRING DEP.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.OptionButton,
                { marginLeft: 6, flexDirection: "row" },
              ]}
            >
              <View style={{ flex: 1 }}>
                <Ionicons name="wallet" size={17} style={styles.OptionIcon} />
              </View>
              <View style={{ flex: 3 }}>
                <Text style={{ color: "#9064E8", fontSize: 14 }}>
                  TERM DEPOSIT
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* ACCOUNT REPORT DISPLAY */}
        <View
          style={{
            width: "100%",
            height: 555,
            marginTop: 30,
            paddingBottom: 10,
          }}
          >
          <Text
            style={{
              marginLeft: 15,
              fontWeight: "bold",
              fontSize: 23,
              marginBottom: 10,
            }}
          >
            Account Report
          </Text>
          <View style={[styles.cardReport, { margin: 10, height: "20%" }]}>
            <Text
              style={{
                marginLeft: 5,
                fontWeight: "bold",
                fontSize: 20,
                color: "#5e17eb",
                marginBottom: 10,
              }}
            >
              REGULAR INCOME
            </Text>
            {/* Bank analysis data -> categorywise -> credit card -> totaldebitamt */}
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  marginTop: 4,
                  flex: 1,
                }}
              >
                SALARY INCOME:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  1.08 L
                </Text>
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  marginTop: 4,
                  flex: 1.2,
                }}
              >
                OTHER INCOME:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  0{" "}
                </Text>
              </Text>
            </View>
            {/* addTables -> overall */}
            <Text
              style={{
                marginLeft: 5,
                fontSize: 12,
                fontWeight: "bold",
                marginTop: 7,
              }}
            >
              AVGERAGE MOTHLY BALANCE:
              <Text
                style={{ fontWeight: "normal", paddingLeft: 10, fontSize: 15 }}
              >
                {" "}
                38.98 K
              </Text>
            </Text>
            {/* overallAnalysis -> overall */}
            <Text
              style={{
                marginLeft: 5,
                fontSize: 12,
                fontWeight: "bold",
                marginTop: 7,
              }}
            >
              CREDIT:DEBIT AMOUNT RATIO:
              <Text
                style={{ fontWeight: "normal", paddingLeft: 10, fontSize: 15 }}
              >
                {" "}
                1.23
              </Text>
            </Text>
          </View>
          <View style={[styles.cardReport, { margin: 10, height: "20%" }]}>
            {/* Bank analysis data -> investmentAnalysis -> investmentSubCategoryAnalysis -> ... -> totalcreditamount */}
            <Text
              style={{
                marginLeft: 5,
                fontWeight: "bold",
                fontSize: 20,
                color: "#5e17eb",
              }}
            >
              INVESTMENT INCOME
            </Text>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                DIVIDEND CREDIT:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  0.1 K
                </Text>
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  flex: 1.2,
                }}
              >
                STOCKS & OPTIONS:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  0.01 K
                </Text>
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                FD/RD INTEREST:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  7 K
                </Text>
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  flex: 1.2,
                }}
              >
                MUTUAL FUNDS c/d:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  0 K/4 K
                </Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                height: "30%",
                marginTop: 13,
                flexDirection: "row",
              }}
            >
              {/* CompleteCategoryWiseAnalysis -> Investment income, expense */}
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 5,
                  fontSize: 20,
                  color: "#5e17eb",
                }}
              >
                CREDIT: 7.1 K
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "#5e17eb" }}
              >
                DEBIT: 4 K
              </Text>
            </View>
          </View>
          <View style={[styles.cardReport, { margin: 10, height: "20%" }]}>
            <Text
              style={{
                marginLeft: 5,
                fontWeight: "bold",
                fontSize: 20,
                color: "#5e17eb",
              }}
            >
              DEBT REPAYMENT
            </Text>
            {/* Bank analysis data -> categorywise -> credit card -> totaldebitamt */}
            <Text
              style={{
                marginLeft: 5,
                fontSize: 12,
                fontWeight: "bold",
                marginTop: 7,
              }}
            >
              CREDIT CARD:
              <Text
                style={{ fontWeight: "normal", paddingLeft: 10, fontSize: 15 }}
              >
                {" "}
                2.36 L
              </Text>
            </Text>
            <View style={{ flexDirection: "row" }}>
              {/* Bank analysis data -> frequentDebits -> EMI obligations -> accountwise -> TotalAmount */}
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  marginTop: 4,
                  flex: 1,
                }}
              >
                EMI PAYMENT:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  1.08 L
                </Text>
              </Text>
              {/* Bank analysis data -> categorywise -> loan disbursed -> totalcreditamt */}
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  marginTop: 4,
                  flex: 1.2,
                }}
              >
                LOANS DISBURSED:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  1.05 L
                </Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
                marginTop: 13,
              }}
            >
              {/* Sum of credit card and total loans (not loans disbursed) */}
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "#5e17eb" }}
              >
                TOTAL: 3.44 L
              </Text>
            </View>
          </View>
        </View>

        {/* MY GOALS DISPLAY */}
        {/* THE THRESHOLD FOR COLORS IS DEPCITED, IT SHOULD FETCH GOALS AND PERCENTAGE COMPLETED */}
        <View style={{ width: "100%", height: 350, marginTop: 30 }}>
          <View
            style={{
              justifyContent: "space-between",
              marginLeft: 25,
              marginRight: 25,
              alignItems: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 23, marginBottom: 10 }}
            >
              My Goals
            </Text>
            <TouchableOpacity
              style={{
                width: "40%",
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "#bd8c5c",
                padding: 7,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 8,
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ color: "#bd8c5c", fontSize: 15 }}>
                Set New Goal
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white", marginTop: 10 }}
          >
            <View
              style={[
                styles.goalCard,
                {
                  height: 250,
                  width: 150,
                  margin: 10,
                  borderWidth: 2,
                  borderColor: "#bd8c5c",
                  flexDirection: "column",
                },
              ]}
            >
              <View
                style={{
                  flex: 2,
                  marginTop: 10,
                  marginBottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 33 }}>10%</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  width: "10%",
                  height: "100%",
                  borderTopRightRadius: 35,
                  borderBottomRightRadius: 35,
                  backgroundColor: "blue",
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "black" }}
                >
                  EXPENDITURE
                </Text>
              </View>
              <View
                style={{
                  flex: 3,
                  width: "100%",
                  alignItems: "center",
                  padding: 10,
                  paddingTop: 0,
                }}
              >
                <Text style={{ fontSize: 14, color: "black" }}>
                  Spend less than Rs. 50,000 on Gambling & Betting
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.goalCard,
                {
                  height: 250,
                  width: 150,
                  margin: 10,
                  borderWidth: 2,
                  borderColor: "#bd8c5c",
                  flexDirection: "column",
                },
              ]}
            >
              <View
                style={{
                  flex: 2,
                  marginTop: 10,
                  marginBottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 33 }}>30%</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  width: "40%",
                  height: "100%",
                  borderTopRightRadius: 35,
                  borderBottomRightRadius: 35,
                  backgroundColor: "green",
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "black" }}
                >
                  EXPENDITURE
                </Text>
              </View>
              <View
                style={{
                  flex: 3,
                  width: "100%",
                  alignItems: "center",
                  padding: 10,
                  paddingTop: 0,
                }}
              >
                <Text style={{ fontSize: 14, color: "black" }}>
                  Spend less than Rs. 50,000 on Gambling & Betting
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.goalCard,
                {
                  height: 250,
                  width: 150,
                  margin: 10,
                  borderWidth: 2,
                  borderColor: "#bd8c5c",
                  flexDirection: "column",
                },
              ]}
            >
              <View
                style={{
                  flex: 2,
                  marginTop: 10,
                  marginBottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 33 }}>60%</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  width: "60%",
                  height: "100%",
                  borderTopRightRadius: 35,
                  borderBottomRightRadius: 35,
                  backgroundColor: "red",
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "black" }}
                >
                  EXPENDITURE
                </Text>
              </View>
              <View
                style={{
                  flex: 3,
                  width: "100%",
                  alignItems: "center",
                  padding: 10,
                  paddingTop: 0,
                }}
              >
                <Text style={{ fontSize: 14, color: "black" }}>
                  Spend less than Rs. 50,000 on Gambling & Betting
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.goalCard,
                {
                  height: 250,
                  width: 150,
                  margin: 10,
                  borderWidth: 2,
                  borderColor: "#bd8c5c",
                  flexDirection: "column",
                },
              ]}
            >
              <View
                style={{
                  flex: 2,
                  marginTop: 10,
                  marginBottom: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 33 }}>100%</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  borderTopRightRadius: 35,
                  borderBottomRightRadius: 35,
                  backgroundColor: "gold",
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "black" }}
                >
                  EXPENDITURE
                </Text>
              </View>
              <View
                style={{
                  flex: 3,
                  width: "100%",
                  alignItems: "center",
                  padding: 10,
                  paddingTop: 0,
                }}
              >
                <Text style={{ fontSize: 14, color: "black" }}>
                  Spend less than Rs. 50,000 on Gambling & Betting
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* INVESTMENT PLAN BUTTON */}
        {/* SHOULD SHOW EXISTING PLAN IF IT EXISTS, ELSE LEAD TO INVESTEMENT ADVISOR PAGE TO CREATE ONE */}
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 40,
            margin: 0,
            padding: 0,
          }}
          >
          <TouchableOpacity
            style={{
              width: "70%",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#bd8c5c",
            }}
            
          >
            <Text
              style={{ color: "#bd8c5c", fontSize: 15, fontWeight: "bold" }}
            >
              VIEW CUSTOM INVESTMENT PLAN
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  goalCard: {
    //backgroundColor: "rgba(255,255,255,0.9)",
    backgroundColor: "white",
    borderRadius: 35,
    width: "85%",
    marginVertical: 10,
    marginBottom: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cardReport: {
    //backgroundColor: "rgba(255,255,255,0.9)",
    //backgroundColor:'rgba(140, 82, 255, 0.2)',
    //backgroundColor:'rgba(82, 113, 255, 0.2)',
    backgroundColor: "rgba(94, 23, 235, 0.2)",
    borderRadius: 35,
    paddingTop: 15,
    paddingLeft: 20,
    width: "93%",
    marginVertical: 10,
    marginBottom: 0,
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  OptionIcon: {
    color: "black",
    marginRight: 8,
    marginLeft: 4,
  },
  OptionButton: {
    width: "47%",
    borderWidth: 2,
    borderColor: "#9064E8",
    backgroundColor: "white",
    padding: 7,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    //backgroundColor: "rgba(255,255,255,0.9)",
    backgroundColor: "white",
    borderRadius: 35,
    paddingTop: 20,
    paddingLeft: 20,
    width: "85%",
    height: 500,
    marginVertical: 10,
    marginBottom: 0,
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
  textInputWrapper: {
    borderBottomWidth: 1,
    borderColor: "grey",
    width: "90%",
    borderRadius: 10,
    paddingLeft: 13,
    padding: 3,
    marginTop: "6%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:22,
    fontWeight:'bold'
  }
});

export default MyGenie;
