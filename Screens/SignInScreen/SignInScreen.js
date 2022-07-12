import * as React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = (props) => {
    const navigation = useNavigation();
    return (
      <View style={props.styles.layout}>
        <Text style={props.styles.title}>Sign in screen</Text>
        <Button
          title="Sign up"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    );
  };

export default SignInScreen;