import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Juan's TODO list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 30,
    backgroundColor: "blue",
    height: 80,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default Header;
