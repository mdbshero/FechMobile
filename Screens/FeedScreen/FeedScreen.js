import * as React from "react";
import { Text, View } from "react-native";

const FeedScreen = (props) => {
    return (
      <View style={props.styles.layout}>
        <Text style={props.styles.title}>Feed Screen</Text>
      </View>
    );
  };

export default FeedScreen;