import * as React from "react";
import { Text, View } from "react-native";

const AccountScreen = (props) => {
    return (
      <View style={props.styles.layout}>
        <Text style={props.styles.title}>Account Screen</Text>
      </View>
    );
  };

export default AccountScreen;