import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

const Cat = (props) => {
  const [isAwake, setIsAwake] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>
        My name is {props.name}, and I am {isAwake ? "awake. Day " : "sleeping. Day "}{count}
      </Text>
      <Button
        onPress={() => {
          setIsAwake(!isAwake);
          setCount(count + 1);
        }}
        title={isAwake ? "Let me sleep" : "Wake me up"}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/thumbnails/007/731/064/small/cat-muzzle-cat-face-simple-illustration-vector.jpg",
        }}
        style={{ width: 300, height: 200 }}
      />
      <Cat name="Comel" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE5B4",
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    color: "red",
  },
});

export default Cafe;