import * as React from "react";
import { Text, View } from "react-native";

const CatalogScreen = (props) => {
    return (
      <View style={props.styles.layout}>
        <Text style={props.styles.title}>Catalog Screen</Text>
      </View>
    );
  };

export default CatalogScreen;