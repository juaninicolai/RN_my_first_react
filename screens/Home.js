import React from "react";
import { Text, View, Button } from "react-native";
import { global } from "../styles/global";

const Home = ({ navigation }) => {
  const [task, setTasks] = {};
  const goToTask = () => {
    navigation.push("Task");
  };
  return (
    <View style={global.container}>
      <Text>Home</Text>
      <Button title="Go to Task" onPress={goToTask} />
    </View>
  );
};

export default Home;
