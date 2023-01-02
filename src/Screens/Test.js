import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLegend, VictoryTheme  } from "victory-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const Test = () => {
  return (
    <SafeAreaView>
      <View
          style={{
            width: "90%",
            height: 330,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <View style={[styles.card, styles.shadowProp, styles.elevation]}>
          <VictoryChart width={300} height={300} theme={VictoryTheme.material}>
              <VictoryBar data={data} x="quarter" y="earnings" />
            </VictoryChart>
        </View>
      </View>
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
    height:500,
    marginVertical: 10,
    flex: 4,
    justifyContent: 'center',
    alignItems:'center'
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

export default Test;
