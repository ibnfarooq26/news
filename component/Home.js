import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Button,
} from "react-native";

import Source from "./Source";

const Home = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Source title={"bbc-news"} navigation={navigation} />
      <Source title={"reuters"} navigation={navigation} />
      <Source title={"cnn"} navigation={navigation} />
      <Source title={"abc-news"} navigation={navigation} />
      <Source title={"bloomberg"} navigation={navigation} />
      <Source title={"business-insider"} navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
