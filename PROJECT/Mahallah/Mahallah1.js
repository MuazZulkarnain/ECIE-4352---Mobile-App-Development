import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar,} from 'react-native';
  
import Constants from 'expo-constants';

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Chicken Chop',
      price : 'RM 10',
      imgUrl: require('../src/menu1.jpeg'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Lamb Chop',
      price : 'RM 9',
      imgUrl: require('../src/menu2.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fish and Chip',
      price : 'RM 8',
      imgUrl: require('../src/menu3.jpg'),
    },
  ];
  
  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

//   function App() {
//   return (
//     <View>
//         <Image source={require('../src/menu2.jpg')}
//        style={{width: 400, height: 400}} />
//     </View>
//   );
// }
// export default App;

  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={DATA}
          keyExtriactor={(time, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.container}>
                  <View style={{ backgroundColor: '#529FF3', margin: 10 }}>
                    {item.title && (
                      <Text
                        style={{
                          paddingVertical: 10,
                          fontSize: 15,
                          paddingStart: 5,
                          paddingEnd: 16,
                          color: 'black',
                        }}>
                        {item.title}
                      </Text>
                    )}
                    {item.imgUrl && (
                      <Image
                        source={item.imgUrl}
                        style={{ height: 250, width: 250 }}
                      />
                    )}
                     {item.price && (
                      <Text
                        style={{
                          paddingVertical: 10,
                          fontSize: 15,
                          paddingStart: 5,
                          paddingEnd: 16,
                          color: 'black',
                        }}>
                        {item.price}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  