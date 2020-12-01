import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text, RefreshControl} from "react-native";
import {bgColor, Dev_Height, Dev_Width, textColor} from "./Const";
import * as rssParser from 'react-native-rss-parser';

export default function RssReader(props) {

  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  async function fetchNews() {
    setRefreshing(true);
    await fetch('https://lpu24.pl/feed/')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        setNews(rss.items);
        return setRefreshing(false);
      })
  }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}
                  horizontal={false}
                  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchNews}/>}>
        {
          news.map(el => (
            <View key={el.id}>
              <Text style={styles.title}>
                {el.title}
              </Text>
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
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  title: {
    color: textColor,
    fontSize: 19,
    fontWeight: '500',
  },
  desc: {
    textAlign: 'justify',
    color: textColor,
    marginBottom: 10,
  }
});
