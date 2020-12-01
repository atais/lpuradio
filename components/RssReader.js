import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from "react-native";
import {bgColor, Dev_Height, Dev_Width, textColor} from "./Const";
import * as rssParser from 'react-native-rss-parser';

export default function RssReader(props) {

  const [news, setNews] = useState([]);

  function fetchNews() {
    fetch('https://lpu24.pl/feed/')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        setNews(rss.items)
      });
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {
          news.map(el => (
            <View key={el.id}>
              <Text style={styles.desc}>
                {el.description}
              </Text>
            </View>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: bgColor,
    padding: 20
  },
  desc: {
    color: textColor,
    marginBottom: 10,
  }
});
