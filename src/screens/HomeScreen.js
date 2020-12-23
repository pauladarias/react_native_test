import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
  <View>
    <Text style={styles.text}>Hola Paulita</Text>
    <Button 
      onPress={() => console.log("Button Pressed")}
      title="Go to components"  
    />
    <TouchableOpacity onPress={() => console.log("list Pressed")}>
      <Text>Go to list demo</Text>
    </TouchableOpacity>
  </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


