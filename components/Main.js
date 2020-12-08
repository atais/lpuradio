import React, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {initializePlayer} from "./GlobalPlayer";
import {TopBar} from "./TopBar";
import LpuRadio from "./LpuRadio";
import RssReader from "./RssReader";
import {initialState, reducer, StateProvider} from "./GlobalState";

const initialLayout = {width: Dimensions.get('window').width};

export default function App() {

  useEffect(() => {
    initializePlayer();
  }, []);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'radio', title: 'Radio'},
    {key: 'news', title: 'News'},
  ]);

  const renderScene = SceneMap({
    radio: LpuRadio,
    news: RssReader,
  });

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ImageBackground source={require('../assets/radio_bg.png')} style={styles.image}>
        <TabView
          renderTabBar={TopBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </ImageBackground>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
