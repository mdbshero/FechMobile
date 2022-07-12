import * as React from "react";
import { Text, View } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={props.styles.layout}>
      <Text style={props.styles.title}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
