import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pick Mahallah</Text>
      <Button
        title="Mahallah Ali"
        onPress={() => navigation.navigate('Mahallah1')}
      />
        <Button
        title="Mahallah Faruq"
        onPress={() => navigation.navigate('Mahallah2')}
      />
    </View>
  );
}

function Mahallah1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mahallh Ali Menu</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function Mahallah2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mahallh Faruq Menu</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mahallah1" component={Mahallah1} />
        <Stack.Screen name="Mahallah2" component={Mahallah2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
