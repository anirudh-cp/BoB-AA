import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import useIdentStore from "../storages/IdentStore";

export default function Home() {

  const {trackingID, referenceID} = useIdentStore();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>tID: {trackingID} rID:{referenceID}</Text>
    </View>
  );
}
