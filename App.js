import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable>{(state) => <Box pressed={state.pressed} />}</Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

export const Box = (props) => (
  <View style={[styles.box, props.pressed && { backgroundColor: "blue" }]} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    margin: 16,
    borderRadius: 2,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 0.3 },
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
