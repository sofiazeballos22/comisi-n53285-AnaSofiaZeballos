import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
import CategoryItem from "../components/CategoryItem"
import categories from "../data/categories.json"
import { Colors } from "react-native/Libraries/NewAppScreen"

const Home = ({ route, navigation}) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(elemntoDeMiArray) => elemntoDeMiArray}
        data={categories.sort()}
        renderItem={({ item }) => (
          <CategoryItem 
            navigation={navigation} 
            category={item} 
          />
        )}
      />
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
})
