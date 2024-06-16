import {
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { useProducts } from "../hooks/useProducts"; // Adjust the import based on your file structure

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.error(error); // Log the error to the console
    return <Text>Error fetching products.</Text>;
  }

  // Extract the array of products from the response
  const products = data?.data ?? [];

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate("Product Details", { id: item._id });
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text>{item.name}</Text>
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
