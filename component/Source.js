import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Pressable,
} from "react-native";

const navigateToNewsSource = (navigation, source) => {
  navigation.navigate("RenderNews", { source });
};
const Source = ({ title, navigation }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        navigateToNewsSource(navigation, title);
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Source;
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "violet",
    margin: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
});
