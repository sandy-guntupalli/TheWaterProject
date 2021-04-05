import React, { useState } from 'react';
import {TouchableOpacity, Linking, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import image3 from './assets/image3.jpg';
import image2 from './assets/image2.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpeg';
import image6 from './assets/image6.jpeg';
import handPump from './assets/handPump.jpeg';

export default function howToHelpScreen() {
    function buttonPressed() {
        Linking.openURL('https://www.unicefusa.org/give-hope-gift-water');
      }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.question}>How you can help right now!</Text>
      <Text style={styles.blurb}>UNICEF (United Nations Internantional Children's Emergency Fun) is a UN agency dedicated to humitarian aid to children, as well as supporting their rights around the world. UNICEF is working to provide accessible ways to access safe water drinking in more than 100 countries. The most effective way to aid is through donations and pubilicity! It's ok if you are not able to donate money at the moment, but you can still share this information with anyone who might be able to donate just a little bit. On this page you can see how your donations are put to use by UNICEF.</Text>

      <Text style={styles.info}>$1 Donation: provides a child with clean drinking water for a month</Text>
      <Image source = {image2} style = {{ width: 300, height: 300 }} />
      <Text style={styles.info}>$15 Donation: provides a child with clean drinking water for a year</Text>
      <Image source = {image3} style = {{ width: 300, height: 300 }} />
      <Text style={styles.info}>$25 Donation: provides a child with parasite-preventing tablets for 700 children</Text>
      <Image source = {image4} style = {{ width: 300, height: 300 }} />
      <Text style={styles.info}>$50 Donation: provides a child with 500 packets to combat dehydration</Text>
      <Image source = {image5} style = {{ width: 300, height: 300 }} />
      <Text style={styles.info}>$220 Donation: provides a child with emergency water kit for five families (soaps, buckets, etc.)</Text>
      <Image source = {image6} style = {{ width: 300, height: 300 }} />
      <Text style={styles.info}>$400 Donation: provides a childrens community with a handpump</Text>
      <Image source = {handPump} style = {{ width: 300, height: 300 }} />

      <TouchableOpacity
        onPress={buttonPressed}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonText}>Donate Here!</Text>
      </TouchableOpacity> 
      
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
    question: {
        fontSize: 25,
        fontFamily: "MarkerFelt-Wide",
    },
    blurb: {
        fontFamily: "Times New Roman",
        color: "black",
        margin: 10,
        textAlign: "center",
    },
    info: {
        fontFamily: "Times New Roman",
        fontSize: 17,
        margin: 5,
        marginTop: 30,
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