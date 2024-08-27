import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native-paper";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Link href="/profile" style={{ color: "blue" }}>
          Go to Profile
        </Link>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexBasis: 500,
    gap: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {},
});
