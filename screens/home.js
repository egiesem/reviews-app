import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: "Victor-Mono",
    fontSize: 34,
  },
});