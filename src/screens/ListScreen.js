import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

const ListScreen = () => {
  const friends = [
    {name : "Friend 1" },
    {name : "Friend 2" }
  ]
  return (
    <FlatList 
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={( { item } ) => {
        return <Text>{item.name}</Text>
    }}
    />
  )
}

const styles = StyleSheet.create({})

export default ListScreen