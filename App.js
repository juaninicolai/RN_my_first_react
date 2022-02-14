import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [user, setUser] = useState("Alan");
  const [fruit, setFruit] = useState({ name: "apple", price: "2" });
  const pressHandler = () => {
    setUser("Juani");
    setFruit({ name: "orange", price: "3" });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>
        {user} is eating an {fruit.name} which costs {fruit.price}
      </Text>
      <View style={styles.buttonStyles}>
        <Button title="Change" onPress={pressHandler} />
      </View>
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
  myStyles: {
    backgroundColor: "lightblue",
    fontWeight: "normal",
    fontSize: 40,
  },
  buttonStyles: {
    marginTop: 30,
  },
});
