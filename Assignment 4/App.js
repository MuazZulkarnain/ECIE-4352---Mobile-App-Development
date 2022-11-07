import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderWidth: 1, fontSize: 18 }}
        placeholder="Insert several names 📛"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />

      <FlatList
        data={text.split(" ")}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
