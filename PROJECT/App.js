import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 20}} >MAIN MENU</Text>
      <View style={[{ width: "50%", marginTop: 20, backgroundColor: "white" }]}>
          <Button
            title="Mahallah Ali"
            onPress={() => navigation.navigate('Mahallah Ali')}
            style={{ height: 100, marginTop: 10 }}
          />
        </View>
        <View style={[{width: "50%", marginTop: 20, backgroundColor: "white" }]}>
          <Button
          title="Mahallah Faruq"
          onPress={() => navigation.navigate('Mahallah Faruq')}
        />
        </View>
    </View>
  );
}

import Mahallah1 from './Mahallah/Mahallah1';
import Mahallah2 from './Mahallah/Mahallah2';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mahallah Ali" component={Mahallah1} />
        <Stack.Screen name="Mahallah Faruq" component={Mahallah2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
