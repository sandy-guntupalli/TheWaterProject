import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Linking, TouchableOpacity, ScrollView, Image, StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import image1 from './assets/image1.jpg';
import awarenessScreen from './awarenessScreen';
import howToHelpScreen from './howToHelpScreen';


function HomeScreen({ navigation }) {
  function buttonPressed() {
    Linking.openURL('https://github.com/katiewang22/my-app/blob/master/App.js');
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style = {styles.text}>The Water Project</Text>
      <Text style = {styles.paragraph}> 1 in 5 Children, globally, do not have enough water to meet their everyday needs. Data shows that children in more than 80 countries live in area with high or extremely high water scarcity. These countries include Eastern and Southern Africa, West and Central Africa, South Asia, and the Middle East, just to name a few. Demand for water continues to grow, but resources only seem to be dwindling. Among the many people facing the effects, Children, who are still growing and developing, face the harshest consequences. </Text>
      <Image source = {image1} style = {{ width: 300, height: 400 }} />

      <TouchableOpacity
        onPress={() => navigation.navigate('Aware')}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonText}>Want to learn more?</Text>
      </TouchableOpacity> 

      <TouchableOpacity
        onPress={() => navigation.navigate('Help')}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonText}>How to Help!</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: "black",
    fontFamily: "MarkerFelt-Wide",

  },
  paragraph: {
    textAlign: "center",
    color: "black",
    fontStyle: "italic",
    fontFamily: "Times New Roman",
    margin: 25,
  },
  buttonStyle: {
    backgroundColor: '#33658A',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'MarkerFelt-Wide',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Aware" component={awarenessScreen} />
        <Stack.Screen name="Help" component={howToHelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
