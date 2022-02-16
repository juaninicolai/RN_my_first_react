import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTask from "./components/AddTask";
import Header from "./components/Headers";
import Task from "./components/Task";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [tasks, setTasks] = useState([
    { task: "HTML I", done: true, id: "1" },
    { task: "CSS", done: true, id: "2" },
    { task: "Responsive design", done: true, id: "3" },
  ]);

  const addTask = (text) => {
    if (!text) {
      Alert.alert("No task?", "Please add a task", { text: "Ok" });
    } else {
      setTasks((prevTasks) => {
        return [{ task: text, id: uuidv4() }, ...prevTasks];
      });
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id != id);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTask addTask={addTask} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <Task item={item} deleteTask={deleteTask} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
    backgroundColor: "white",
    flex: 1,
  },
  list: {
    marginTop: 30,
    backgroundColor: "white",
    flex: 1,
  },
});
