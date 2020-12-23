import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

const ListScreen = () => {
  const friends = [
    {name : "Friend 1", age: 20 },
    {name : "Friend 2", age: 20 },
    {name : "Friend 3", age: 20 }
  ]
  return (
    <FlatList 
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={( { item } ) => {
        return (
          <View>
            <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
          </View>
        
        )
    }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen