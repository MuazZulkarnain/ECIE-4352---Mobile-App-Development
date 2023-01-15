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
import Booth1 from './Booth/Booth1';
import Booth2 from './Booth/Booth2';
import Booth3 from './Booth/Booth3';
import Booth4 from './Booth/Booth4';
import Booth5 from './Booth/Booth5';
import Booth6 from './Booth/Booth6';
import Booth7 from './Booth/Booth7';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mahallah Ali" component={Mahallah1} />
        <Stack.Screen name="Mahallah Faruq" component={Mahallah2} />
        <Stack.Screen name="Booth: Westernize" component={Booth1} />
        <Stack.Screen name="Booth: Original Syrian" component={Booth2} />
        <Stack.Screen name="Booth: Roti Canai Mamu" component={Booth3} />
        <Stack.Screen name="Booth: Soup Fiesta" component={Booth4} />
        <Stack.Screen name="Booth: Ginger Bits!" component={Booth5} />
        <Stack.Screen name="Booth: Rasa Nusantara" component={Booth6} />
        <Stack.Screen name="Booth: Breakfast Aloha!" component={Booth7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
