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
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";

const GenieGrants = () => {
  return (
    <SafeAreaView style={{ paddingBottom: 55 }}>
      <StatusBar backgroundColor="#a37bf4" translucent={true} />
      <ScrollView>
        {/* HEADER */}
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require("../assets/Images/background.png")}
              resizeMode="cover"
              style={{
                paddingTop: 5,
                height: 100,
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
                Genie Grants
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  marginTop: 2,
                  marginLeft: 17,
                }}
              >
                Claim exciting new rewards tailored just for you !
              </Text>
            </ImageBackground>
          </View>
        </View>
        {/* THREE WISHES */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={[
                styles.card,
                styles.shadowProp,
                {
                  borderWidth: 2,
                  borderColor: "#FFD700",
                  backgroundColor: "#FFD700",
                },
              ]}
            >
              <Text style={{ fontSize: 20 }}>
                25% Off on Axis Mutual Fund units
              </Text>
              <Text style={{ fontSize: 13, marginTop: 10 }}>
                On the bob World App
              </Text>
              <Text style={{ fontSize: 17, marginTop: 10, color: "#000" }}>
                CODE: XZYSF12
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              flexDirection: "row",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <View
                style={[
                  styles.card,
                  styles.shadowProp,
                  {
                    borderWidth: 2,
                    borderColor: "#C0C0C0",
                    width: "85%",
                    backgroundColor: "#C0C0C0",
                  },
                ]}
              >
                <Text style={{ fontSize: 18 }}>
                  25% Off on Axis Mutual Fund units
                </Text>
                <Text style={{ fontSize: 11, marginTop: 10 }}>
                  On the bob World App
                </Text>
                <Text style={{ fontSize: 15, marginTop: 10, color: "#000" }}>
                  CODE: XZYSF12
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <View
                style={[
                  styles.card,
                  styles.shadowProp,
                  {
                    borderWidth: 2,
                    borderColor: "#CD7F32",
                    width: "85%",
                    backgroundColor: "#CD7F32",
                  },
                ]}
              >
                <Text style={{ fontSize: 18 }}>
                  25% Off on Axis Mutual Fund units
                </Text>
                <Text style={{ fontSize: 11, marginTop: 10 }}>
                  On the bob World App
                </Text>
                <Text style={{ fontSize: 15, marginTop: 10, color: "#000" }}>
                  CODE: XZYSF12
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Images/final_1.png")}
              style={{ height: 80, flex: 1 }}
              resizeMode="contain"
            />
            <View style={{ flex: 2 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingLeft: 10,
                  color: "#5e17eb",
                }}
              >
                PAISA GENIE'S
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#5e17eb" }}
              >
                3 Wasool Wishes
              </Text>
            </View>
          </View>
        </View>

        {/* REWARDS LIST PER SECTION */}
        <View
          style={{
            backgroundColor: "#a37bf4",
            paddingBottom: 15,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 23,
              marginBottom: 5,
            }}
          >
            Banking
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
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
        </View>

        <View style={{ backgroundColor: "#5e17eb", paddingBottom: 15 }}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 23,
              marginBottom: 5,
            }}
          >
            Equities
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
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
        </View>

        <View style={{ backgroundColor: "#a37bf4", paddingBottom: 15 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 23,
              marginBottom: 5,
              marginTop: 15,
              marginLeft: 10,
            }}
          >
            Insurance
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
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
        </View>

        <View style={{ backgroundColor: "#5e17eb", paddingBottom: 15 }}>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 23,
              marginBottom: 5,
            }}
          >
            Mutual Funds
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
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
        </View>

        <View style={{ backgroundColor: "#a37bf4", paddingBottom: 15 }}>
          <Text
            style={{
              color: "black",
              marginTop: 15,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 23,
              marginBottom: 5,
            }}
          >
            Pension Schemes
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
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
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            paddingBottom: 15,
            height: 50,
            paddingTop: 10,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 10 }}>Terms & Conditions apply</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    width: "50%",
    height: 150,
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

export default GenieGrants;
