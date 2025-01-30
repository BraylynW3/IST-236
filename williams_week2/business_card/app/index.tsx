import { Text, View, StyleSheet, SafeAreaView, Linking } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Image, type ImageSource } from 'expo-image';
import React from "react";

export default function Index() {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.root}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/braylyn.jpg")}/>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Braylyn Williams</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("mailto:bwilli78@hgtc.edu")}>bwilli78@hgtc.edu</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("tel:8437981439")}>(843)-798-1439</Text>
        <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/BraylynW3")}>Visit my Github</Text>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgb(247, 204, 204)',
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 3,
    width: "100%",
    paddingTop: 40,
  },
  image: {
    height: 400,
    resizeMode: "cover",
    borderWidth: 5,
    borderColor: 'rgb(136, 35, 82)'
  },
  infoContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 10,
    color: 'rgb(136, 35, 82)',
  }

});
