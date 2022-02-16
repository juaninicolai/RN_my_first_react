import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const changeHandler = (value) => {
    setText(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        onChangeText={changeHandler}
      />
      <Button title="Add task" color="blue" onPress={() => addTask(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default AddTask;
