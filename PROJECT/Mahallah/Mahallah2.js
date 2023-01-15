import React, { useState } from "react";
import { Text,StyleSheet,View,Image,TextInput,Dimensions,FlatList,TouchableOpacity,TouchableOpacityComponent,SafeAreaView, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const listTab = [
  {
    status: "All Food",
  },
  {
    status: "Malaysian Food",
  },
  {
    status: "Wastern Food",
  },
];

const data = [
  {
    id: '001',
    title: 'Chicken Chop',
    price : 'RM 8.00',
    imgUrl: require('../src/image/Chicken Chop.jpeg'),
    status : 'Wastern Food',
    navigateTo:"Mahallah Ali"
  },
  {
    id: '002',
    title: 'Nasi Goreng Chicken Chop',
    price : 'RM 10.00',
    imgUrl: require('../src/image/Nasi Goreng Chicken Chop.jpg'),
  },
  {
    id: '003',
    title: 'Lamb Chop',
    price : 'RM 12.00',
    imgUrl: require('../src/image/Lamb Chop.jpg'),
  },
  {
    id: '004',
    title: 'Nasi Goreng Lamb Chop',
    price : 'RM 14.00',
    imgUrl: require('../src/image/Nasi Goreng Lamb Chop.jpg'),
  }
];


const separator = () => {
  return <View style={{ height: 1, backgroundColor: "#f1f1f1" }} />;
};

const Practice = () => {


  const [status, setStatus] = useState("All Food")
  const [datalist, setDatalist] = useState(data);;
  const setStatusFilter = (status) => {
    if (status !== "All Food") {
      setDatalist([...data.filter((e) => e.status === status)]);
    } else {
      setDatalist(data);
    }
    setStatus(status);
  };

const navigation = useNavigation()
const renderItem = ({  item, index }) => {
  return (
    <View key={index} style={styles.itemContainer}>
      <View style={styles.itemLogo}>
        <Image
            style={styles.itemImage}
            source={item.imgUrl}
        />
      </View>
      <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.title}</Text>
      </View>
      <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.price}</Text>
      </View>
      <View
        style={[
          styles.itemStatus,
          {
            backgroundColor: item.status === "Malaysian Food" ? "#e5848e" : "#69C080",
          },
         ]}
       >
         <Text>{item.status}</Text>
      </View>
      <View>
             <Button 
         title="Go to Booth"
         onPress={() => navigation.navigate(item.navigateTo)}
        />
      </View>
     </View>
  );
 };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive,
              ]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
          data={datalist}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 15,
  },

  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#ebebeb",
    padding: 10,
    justifyContent: "center",
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: "#e6838d",
  },

  textTabActive: {
    color: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },

  itemLogo: {
    padding: 10,
  },

  itemImage: {
    width: 200,
    height: 200,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStatus: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: "center",
    right: 12,
  },
});