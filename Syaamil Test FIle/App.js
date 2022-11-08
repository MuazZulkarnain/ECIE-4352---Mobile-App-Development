import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const textInputChange = (t) => {setTextInputData(t)}
  const buttonClicked = () => {setMyData(current => [...current, textInputData])}
  const [myData, setMyData] = useState(['Apple', 'Orange'])
  const [textInputData, setTextInputData] = useState('')

  return (
    <View style = {styles.container}>
      <Text style = {styles.textPrompt}>
        ENTER ITEM
      </Text>
      <StatusBar style = "auto"/>
      <TextInput 
        style = {styles.inputText}
        placeholder = "Enter fruit name"
        onChangeText={(newText) => textInputChange(newText)}
      />
      <Text> </Text>
      <View>
        <Button
          title = "Add"
          onPress={buttonClicked}
          />
        <Text> </Text>
        <Text style = {styles.textPrompt}>
          The list of fruits:
        </Text>
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
    marginTop:15,
    borderWidth: 3,
    borderColor:"white"
  },

  container: {
    flex: 1,
    backgroundColor: '#ffdb96',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textPrompt: {
    fontSize: 25,
    color: "purple",
  },

});