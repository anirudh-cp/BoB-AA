import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';

import * as NavigationBar from "expo-navigation-bar";

import Splash from "./src/Screens/Splash";
import MyGenie from "./src/Screens/MyGenie";
import Auth from "./src/Screens/Auth";
import Slider from "./src/Screens/Slider";
import Navigator from "./src/Screens/Navigator";
import Info from "./src/Screens/Info";
import Test from "./src/Screens/Test";
import Loading from "./src/Screens/Loading";
import Profile from "./src/Screens/Profile";
import GenieGrants from "./src/Screens/GenieGrants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  const customGenieButton = ({ focused }) => {
    <TouchableOpacity onPress={onPress} style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    </TouchableOpacity>
  }

  function StackTabs() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 55,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 0,
          padding: 2
        }
      }}
        initialRouteName='MyGenie'
      >
        <Tab.Screen name="Test" component={Test} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 1, top: 1 }}>
              <Ionicons name='construct' size={30} style={{
                color: focused ? '#0779f3' : 'black',
              }}
              />
              <Text style={{ color: focused ? '#0779f3' : 'black', fontSize: 12 }}>TEST</Text>
            </View>
          )
        }} />

        <Tab.Screen name="MyGenie" component={MyGenie} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 1, top: 1 }}>
              <Ionicons name='cash' size={30} style={{
                color: focused ? '#0779f3' : 'black',
              }}
              />
              <Text style={{ color: focused ? '#0779f3' : 'black', fontSize: 12 }}>MY GENIE</Text>
            </View>
          )
        }} />
        <Tab.Screen name="Navigator" component={Navigator} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 1, top: 1 }}>
              <Ionicons name='compass-outline' size={30} style={{
                color: focused ? '#0779f3' : 'black',
              }}
              />
              <Text style={{ color: focused ? '#0779f3' : 'black', fontSize: 12 }}>NAV</Text>
            </View>
          )
        }} />

        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 1, top: 1 }}>
              <Ionicons name='person' size={20} style={{
                color: focused ? '#8c52ff' : 'black',
              }}
              />
              <Text style={{ color: focused ? '#8c52ff' : 'black', fontSize: 12 }}>Profile</Text>
            </View>
          )
        }} />
        <Tab.Screen name="GenieGrants" component={GenieGrants} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 1, top: 1 }}>
              <Ionicons name='ribbon' size={20} style={{
                color: focused ? '#8c52ff' : 'black',
              }}
              />
              <Text style={{ color: focused ? '#8c52ff' : 'black', fontSize: 12 }}>Rewards</Text>
            </View>
          )
        }} />


      </Tab.Navigator>
    )
  }

  function TestTab() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Test" component={Test} />
      </Tab.Navigator>
    )
  }

  function MyGenieTab() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="MyGenie" component={MyGenie} />
      </Tab.Navigator>
    )
  }


  NavigationBar.setBackgroundColorAsync("black");


  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="StackTabs" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splash" component={Splash} ></Stack.Screen>
        <Stack.Screen name="Auth" component={Auth} ></Stack.Screen>
        <Stack.Screen name="Info" component={Info} ></Stack.Screen>
        <Stack.Screen name="Slider" component={Slider} ></Stack.Screen>
        <Stack.Screen name="Loading" component={Loading} ></Stack.Screen>
        <Stack.Screen name="StackTabs" component={StackTabs} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
