import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';

const Booth2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Booth: Original Syrian
      </Text>
      <Image source={require('./booth2.png')} 
        style={styles.image}
      />
    </View>
  );
};

export default Booth2;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: 'aliceblue',
    flex: 1,
    padding: 20,
  },
  image: {
    width: 500,
    height: 660,
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