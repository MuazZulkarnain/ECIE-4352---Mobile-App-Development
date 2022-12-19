import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, TextInput, Button,} from "react-native";

export default function App() {

  const textInputChange = (t) => {
    setTextInputData(t);
  };

  const buttonClicked = () => {
    setMyData((current) => [...current, textInputData]);
  };

  const [myData, setMyData] = useState([]);
  const [textInputData, setTextInputData] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.textPrompt}>Enter Your Champion</Text>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/3c/8f/5f/3c8f5fd12233a3aeeb260a8b9148eb2f.png",
        }}
        style={{width: 200, height: 200}}
      />
      <StatusBar style="auto"/>
      <View>
        <TextInput
          style={styles.inputText}
          placeholder="Eg: Thor"
          onChangeText={(newText) => textInputChange(newText)}
        />
        {/* <Text>{textInputData}</Text>
        <Text>{myData}</Text> */}
      </View>
      <View>
        <Button 
          title="Add" 
          color="gray" 
          onPress={buttonClicked} 
        />
        <FlatList
          data={myData}
          renderItem={({item}) => (
            <Text style={styles.champions}>{item}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textPrompt: {
    fontSize: 30,
    color: "black",
    paddingBottom: 30,
  },

  champions: {
    marginTop: 5,
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  },
});
