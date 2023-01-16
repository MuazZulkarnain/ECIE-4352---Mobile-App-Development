import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

const Booth4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booth: Soup Fiesta</Text>
      <Image source={require('./booth4.png')} 
        style={styles.image}
      />
    </View>
  );
};

export default Booth4;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: 'aliceblue',
    flex: 1,
    padding: 20,
  },
  image: {
    width: 620,
    height: 535,
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