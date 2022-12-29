import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Linking } from "react-native";

import useConsent from "../utils/TempConsent";
import * as WebBrowser from 'expo-web-browser';

import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

const phone = [
  { label: '9987600001', value: '9987600001' },
  { label: '9987600002', value: '9987600002' },
  { label: '9987600003', value: '9987600003' },
  { label: '9987600004', value: '9987600004' },
  { label: '9987600005', value: '9987600005' },
  { label: '9987600006', value: '9987600006' },
  { label: '9987600007', value: '9987600007' },
];


export default function SignUp({ navigation }) {

  const [text, onChangeText] = useState("9987600001");

  const [valuePhone, setValuePhone] = useState(null);
  const [isFocusPhone, setIsFocusPhone] = useState(false);

  const [valueFI, setValueFI] = useState(null);
  const [isFocusFI, setIsFocusFI] = useState(false);

  const [dataFI, setDataFI] = useState([]);

  const { getConsent } = useConsent();

  const handleLogin = async (phone, FIType) => {
    console.log("Get consent for user phone number " + phone);
    const response = await getConsent(phone, FIType);
    // console.log(JSON.stringify(response));

    console.log('Data Retrived! To access any data which has been retrived: \n import useDataStore from "../storages/DataStore;\n const { data } = useDataStore();\n\n Then use the variable for access to it.')

    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

      <Dropdown
        style={[styles.dropdown, isFocusPhone && { borderColor: 'blue' }]}
        data={phone}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocusPhone ? 'Select Phone' : '...'}
        searchPlaceholder="Search..."
        value={valuePhone}
        onFocus={() => setIsFocusPhone(true)}
        onBlur={() => setIsFocusPhone(false)}
        onChange={item => {
          setValuePhone(item.value);
          setIsFocusPhone(false);
          setDataFI({
            '9987600001': [{ label: 'DEPOSIT', value: 'DEPOSIT' }, { label: 'EQUITIES', value: 'EQUITIES' }],
            '9987600002': [{ label: 'DEPOSIT', value: 'DEPOSIT' }, { label: 'MUTUAL FUND', value: 'MUTUAL FUND' }],
            '9987600003': [{ label: 'DEPOSIT', value: 'DEPOSIT' },],
            '9987600004': [{ label: 'DEPOSIT', value: 'DEPOSIT' },],
            '9987600005': [{ label: 'INSURANCE POLICY', value: 'INSURANCE POLICY' }, { label: 'TERM DEPOSIT', value: 'TERM DEPOSIT' }],
            '9987600006': [{ label: 'NPS', value: 'NPS' }, { label: 'RECURRING DEPOSIT', value: 'RECURRING DEPOSIT' }],
            '9987600007': [{ label: 'OTHER', value: 'OTHER' },]
          }[item.value])
          setValueFI(null)
        }}
      />



<Dropdown
        style={[styles.dropdown, isFocusFI && { borderColor: 'blue' }]}
        data={dataFI}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocusPhone ? 'Select FI Type' : '...'}
        searchPlaceholder="Search..."
        value={valuePhone}
        onFocus={() => setIsFocusFI(true)}
        onBlur={() => setIsFocusFI(false)}
        onChange={item => {
          setValueFI(item.value);
          setIsFocusFI(false);
        }}
      />

      <Button title="Submit" onPress={() => {
        handleLogin(valuePhone, valueFI);
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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 300,
    margin: 10
  },
  selectedStyle: {
    borderRadius: 12,
  },
});
