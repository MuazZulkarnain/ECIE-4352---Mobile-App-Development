import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Cat = (props) => {
  const [isAwake, setIsSleeping] = useState(true);
  let day = 0;

  return (
    <View>
      <Text>
        My name is {props.name}, and I am {isAwake ? "awake" : "sleeping"}.
      </Text>
      <Button
        onPress={() => {
          setIsSleeping(false);
        }}
        disabled={!isAwake}
        title={isAwake ? "Let me sleep" : "Wake me up"}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Oyen" />
    </>
  );
};

export default Cafe;
