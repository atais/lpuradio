import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import {bgColor, bgLighter, Dev_Height, Dev_Width, textColor} from "./Const";
import * as rssParser from 'react-native-rss-parser';
import HTMLView from 'react-native-htmlview';

export default function RssReader(props) {

  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [content, setContent] = useState({});

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

  function bh() {
    if (!!content.title) {
      setContent({});
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", bh);
    if (news.length === 0) {
      fetchNews();
    }
    return () => BackHandler.removeEventListener("hardwareBackPress", bh);
  }, [content]);

  if (!!content.title) {
    return (
      <SafeAreaView style={styles.contentContainer}>
        <Text style={styles.desc} onPress={() => setContent({})}>
          Wróć
        </Text>
        <Text style={styles.title}>
          {content.title}
        </Text>
        <View style={styles.hr}/>

        <HTMLView stylesheet={htmlStyles}
                  style={styles.news}
                  addLineBreaks={false}
                  value={content.content}
        />
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.listContainer}>
        <ScrollView style={styles.scrollView}
                    horizontal={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchNews}/>}>
          {
            news.map(el => (
              <TouchableHighlight key={el.id} onPress={() => setContent(el)}>
                <View style={styles.news}>
                  <Text style={styles.title}>
                    {el.title}
                  </Text>
                  <Text style={styles.desc}>
                    {el.description}
                  </Text>
                  <View style={styles.hr}/>
                </View>
              </TouchableHighlight>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}


const htmlStyles = StyleSheet.create({
  p: {
    fontSize: 15,
    color: textColor
  },
  marginBottom: 10,
});

const styles = StyleSheet.create({
  contentContainer: {
    height: Dev_Height,
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bgColor,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  listContainer: {
    height: Dev_Height,
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: bgColor,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  title: {
    color: textColor,
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 5,
  },
  desc: {
    textAlign: 'justify',
    fontSize: 15,
    color: textColor,
    marginBottom: 10,
  },
  news: {
    marginTop: 15,
  },
  hr: {
    marginTop: 15,
    marginLeft: 50,
    marginRight: 50,
    borderBottomColor: bgLighter,
    borderBottomWidth: 1,
  }
});
