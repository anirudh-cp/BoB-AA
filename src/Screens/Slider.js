import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const sliders = [
  {
    key: 1,
    title: "Title-1",
    text: "1 asjfasd;folsdnfmsdjflnasmf;alsdgnasdjgasng",
    image: require("../assets/Images/final_1.png"),
    backgroundColor: "green",
  },
  {
    key: 2,
    title: "Title-2",
    text: "1 asjfasd;folsdnfmsdjflnasmf;alsdgnasdjgasng",
    image: require("../assets/Images/PaisaGenie.png"),
    backgroundColor: "yellow",
  },
  {
    key: 3,
    title: "Title-3",
    text: "1 asjfasd;folsdnfmsdjflnasmf;alsdgnasdjgasng",
    image: require("../assets/Images/logo_12.png"),
    backgroundColor: "blue",
  },
];

const Slider = () => {
  return (
    <SafeAreaView>
      <Text>Slider</Text>
    </SafeAreaView>
  );
};

export default Slider;
