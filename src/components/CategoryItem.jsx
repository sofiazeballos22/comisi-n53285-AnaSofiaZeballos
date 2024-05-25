import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../constants/colors"
import Card from "./Card"

const CategoryItem = ({ category, navigation }) => {
  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={()=>navigation.navigate('ItemListCategory', {category})}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  text: {
    width: 210,
    color: colors.platinum,
    textAlign: "center",
    fontSize: 20,
  },
})
