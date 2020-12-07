import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import {bgColor, bgLighter, Dev_Height, Dev_Width, lpuColor, textColor, transparent} from "./Const";
import * as rssParser from 'react-native-rss-parser';
import HTMLView from 'react-native-htmlview';
import IoniIcons from "react-native-vector-icons/Ionicons";
import {WebView} from 'react-native-webview';

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

  function renderNode(node, index, siblings, parent, defaultRenderer) {
    if (node.name === 'iframe') {
      const a = node.attribs;
      const iframeHtml = `<iframe src="${a.src}"></iframe>`;
      console.log(node);
      console.log(iframeHtml);
      return (
        <View key={index} style={{width: Number(a.width), height: Number(a.height)}}>
          <WebView source={{html: iframeHtml}}/>
        </View>
      );
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
        <ScrollView horizontal={false}>
          <Text style={styles.title}>
            {content.title}
          </Text>
          <View style={styles.hr}/>
          <HTMLView stylesheet={htmlStyles}
                    style={styles.news}
                    addLineBreaks={false}
                    renderNode={renderNode}
                    value={content.content}
          />
        </ScrollView>
        <IoniIcons.Button
          name="return-up-back"
          onPress={() => setContent({})}
          backgroundColor={transparent}
          underlayColor={transparent}
          size={50}
          borderRadius={0}
          iconStyle={styles.noMargin}
          color={lpuColor}
        >Wróć do listy
        </IoniIcons.Button>
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
    color: textColor,
    textAlign: 'justify',
  },
  pre: {
    fontSize: 15,
    color: textColor,
    textAlign: 'justify',
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
    justifyContent: 'space-between',
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
