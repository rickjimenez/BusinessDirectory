import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const { API_URL, API_KEY } = Constants.manifest?.extra || {};


export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.tsx to start working on your app! {API_URL} {API_KEY}
      </Text>
      <StatusBar style="auto" />
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
});
