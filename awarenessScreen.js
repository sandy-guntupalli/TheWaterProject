import React, { useState } from 'react';
import { Linking, Image, TouchableOpacity, ScrollView, StyleSheet, Text} from 'react-native';
import tenThings from './assets/tenThings.png';
import globalWater from './assets/globalWater.png';
import waterWalk from './assets/waterWalk.png';
import youtube from './assets/youtube.png';

export default function awarenessScreen() {

    function buttonPressed() {
      Linking.openURL('https://water.org/our-impact/water-crisis/');
    }

    function buttonPressed1() {
      Linking.openURL('https://www.unicef.org/stories/10-things-you-didnt-know-about-water');
    }

    function buttonPressed2() {
      Linking.openURL('https://www.worldvision.org/clean-water-news-stories/compare-walk-for-water-cheru-kamama');
    }

    function buttonPressed3() {
      Linking.openURL('https://www.youtube.com/watch?v=yRXmG1nBKiA&ab_channel=UNICEF');
    }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}> Learn More!</Text>
      <Text style={styles.paragraph}> On this page you can find many different articles on the Water Crisis, how children in these countries live, and much more!</Text>
      
      <TouchableOpacity
        onPress={buttonPressed}
      >
        <Text style={styles.subtitle}>Learn about the Global Water Crisis</Text>
      </TouchableOpacity> 
      
      <Image source={globalWater} style = {{width: 280, height: 280}} />
      <Text style={styles.paragraph}>Today the Water Crisis affects BILLIONS around the world. 844 million live without access to Safe Water, while 2.3 billion live without improved sanitation. Learn what Water.org is doing to combat the Global Water Crisis and join our cause today!</Text>

      <TouchableOpacity
        onPress={buttonPressed1}
      >
        <Text style={styles.subtitle}>10 things you didn't know about Water!</Text>
      </TouchableOpacity> 
      
      <Image source={tenThings} style = {{width: 280, height: 280}} />
      <Text style={styles.paragraph}>How unsafe water, sanitation, andhygiene puts children at Risk</Text>
    
      <TouchableOpacity
        onPress={buttonPressed2}
      >
        <Text style={styles.subtitle}>Water within reach: Comparing 2 children's walks for water</Text>
      </TouchableOpacity> 
      
      <Image source={waterWalk} style = {{width: 280, height: 280}} />
      <Text style={styles.paragraph}>See the differences in walks for water between two children Cheru and Kamama, where one treks for 3 hours and another strols for 7 minutes.</Text>

      <TouchableOpacity
        onPress={buttonPressed3}
      >
        <Text style={styles.subtitle}>How far would you walk for Water?</Text>
      </TouchableOpacity> 
      
      <Image source={youtube} style = {{width: 500, height:280}} />
      <Text style={styles.paragraph}>This video shows a social experiment to bring awareness on the lifestyles of some people and their struggle to get water. It also highlights the privileges we have and is overall a fun video to watch. Check it out!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      fontFamily: 'MarkerFelt-Wide',
      textAlign: 'center',
      margin: 5
    },
    subtitle: {
      fontSize: 20,
      fontFamily: 'MarkerFelt-Wide',
      textAlign: 'center',
      margin: 5,
      marginTop: 30
    },
    paragraph: {
      fontFamily: 'Times New Roman',
      textAlign: 'center',
      margin: 5,
    },
})