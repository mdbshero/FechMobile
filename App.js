import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import FeedScreen from "./Screens/FeedScreen/FeedScreen";
import AccountScreen from "./Screens/AccountScreen/AccountScreen";
import CatalogScreen from "./Screens/CatalogScreen/CatalogScreen";

// --- Main screens ---
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">{props => <HomeScreen {...props} styles={styles}/>}</Tab.Screen>
      <Tab.Screen name="Feed">{props => <FeedScreen {...props} styles={styles}/>}</Tab.Screen>
      <Tab.Screen name="Catalog">{props => <CatalogScreen {...props} styles={styles}/>}</Tab.Screen>
      <Tab.Screen name="Account">{props => <AccountScreen {...props} styles={styles}/>}</Tab.Screen>
    </Tab.Navigator>
  );
};

// --- Onboarding screens ---
const Stack = createStackNavigator();

const SignInScreen = (props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign in screen</Text>
      <Button
        title="Sign up"
        onPress={() => props.navigation.navigate("SignUp")}
      />
    </View>
  );
};

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign up screen</Text>
      <Button title="Continue" onPress={() => navigation.navigate("Main")} />
    </View>
  );
};

// --- App ---

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});