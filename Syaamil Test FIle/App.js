import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const textInputChange = (t) => {
      setTextInputData(t)
  }

  const buttonClicked = () => {
    setMyData(current => [...current, textInputData])
  }

  const [myData, setMyData] = useState(['Apple', 'Orange'])
  const [textInputData, setTextInputData] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.textPrompt}>Enter item:</Text>
      <StatusBar style="auto" />
      <View>
        <TextInput 
          style = {styles.inputText}
          placeholder = "Enter"
          onChangeText={(newText) => textInputChange(newText)}
        />
        <Text> </Text>
      </View>
      <View>
        <Button
          title = "Add"
          onPress={buttonClicked}
          />
        <Text> </Text>
        <Text>The list of fruits:</Text>
        <Text> </Text>
        <FlatList
          data={myData}
          renderItem={({item}) => <Text>{item}</Text>}
        />      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    marginTop:10,
    borderWidth: 1,
    borderColor:"white"
  },

  container: {
    flex: 1,
    backgroundColor: '#ffdb96',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textPrompt: {
    fontSize: 24,
    color: "purple",
  },
});