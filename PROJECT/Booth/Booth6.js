import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

const Booth6 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booth: Rasa Nusantara</Text>
      <Image source={require('./booth6.png')} 
        style={styles.image}
      />
    </View>
  );
};

export default Booth6;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: 'aliceblue',
    flex: 1,
    padding: 20,
  },
  image: {
    width: 625,
    height: 550,
    alignSelf: "center",
    borderColor: 'black',
    borderWidth: 2,
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'coral',
    textAlign: 'center',
    alignSelf: "center",
  },
});