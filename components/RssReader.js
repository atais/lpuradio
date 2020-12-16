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
import {Dev_Height, Dev_Width, lpuColor, textColor, transparent} from "./Const";
import * as rssParser from 'react-native-rss-parser';
import Image from 'react-native-scalable-image';
import NewsItem from "./NewsItem";

export default function RssReader(props) {

  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [content, setContent] = useState({});

  const minRes = '-390x220'

  async function fetchNews() {
    setRefreshing(true);
    await fetch('https://lpu24.pl/feed/')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        const withImages = rss.items.map((it) => {
          const url = it.enclosures[0].url;
          const lastDot = url.lastIndexOf('.');
          const ext = url.substr(lastDot);
          const file = url.substr(0, lastDot);
          return {
            ...it,
            smallImg: {uri: file + minRes + ext},
            bigImg: {uri: url},
          }
        })

        setNews(withImages);
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

  function Divider(props) {
    if (props.idx === news.length - 1) {
      return (<View/>)
    } else {
      return (<View style={styles.hr}/>)
    }
  }


  if (!!content.title) {
    return (
      <NewsItem content={content} setContentFn={setContent}/>
    )
  } else {
    return (
      <SafeAreaView style={styles.listContainer}>
        <ScrollView horizontal={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchNews}/>}>
          {
            news.map((el, idx) => (
              <TouchableHighlight key={el.id} onPress={() => setContent(el)}>
                <View>
                  <View style={styles.news}>
                    <View style={styles.newsRow}>
                      <Image width={(Dev_Width - 20) * 0.3} source={el.smallImg}/>
                      <Text style={styles.title}>
                        {el.title}
                      </Text>
                    </View>
                    <Text style={styles.desc}>
                      {el.description}
                    </Text>
                  </View>
                  <Divider idx={idx}/>
                </View>
              </TouchableHighlight>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    height: Dev_Height,
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: transparent,
  },
  title: {
    color: textColor,
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    width: (Dev_Width - 30) * 0.7,
  },
  desc: {
    marginTop: 10,
    textAlign: 'justify',
    color: textColor,
  },
  news: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
    marginTop: 15,
  },
  newsRow: {
    flex: 1,
    flexDirection: 'row',
  },
  hr: {
    marginLeft: 50,
    marginRight: 50,
    borderBottomColor: lpuColor,
    borderBottomWidth: 1,
  }
});
