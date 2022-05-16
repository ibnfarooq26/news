import React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { API_KEY } from "@env";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Linking,
} from "react-native";

import axios from "axios";
function RenderNews({ route, navigation }) {
  const { source } = route.params;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let newsUrl = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`;
    console.log(newsUrl);
    axios.get(newsUrl).then(({ data }) => {
      setArticles(data.articles);
    });
  }, []);

  const newsItems = articles.map((article) => (
    <View key={article.url} style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.urlToImage} />
      <Text style={styles.title} onPress={() => Linking.openURL(article.url)}>
        {article.title}
      </Text>
      <Text style={styles.content}>{article.content}</Text>
      <Text style={styles.url} onPress={() => Linking.openURL(article.url)}>
        {article.url}
      </Text>
    </View>
  ));

  return <ScrollView style={styles.head}>{newsItems}</ScrollView>;
}

export default RenderNews;

const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "flex-start",
  },
  title: {
    backgroundColor: "#fff",
    // alignItems: "center",
    textAlign: "left",
    color: "blue",
    fontSize: 25,
  },
  content: {
    backgroundColor: "#fff",
  },
  url: {
    backgroundColor: "#fff",
  },
  urlToImage: {
    width: 400,
    height: 400,
  },
});
