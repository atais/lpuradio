import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import PlayerControls from "./PlayerControls";
import {initializePlayer} from "./GlobalPlayer";
import {initialState, reducer, StateProvider} from "./GlobalState";
import Logo from "./Logo";
import {bgColor, Dev_Height, Dev_Width} from "./Const";
import {RdsStore} from "./RdsStore";
import NowPlaying from "./NowPlaying";
import RecentlyPlayed from "./RecentyPlayed";

export default function App() {
  useEffect(() => {
    initializePlayer();
  }, []);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <SafeAreaView style={styles.contanier}>
        <RdsStore/>
        <Logo/>
        <View>
          <PlayerControls/>
          <NowPlaying/>
        </View>
        <RecentlyPlayed/>
      </SafeAreaView>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  contanier: {
    height: Dev_Height,
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: bgColor
  }
});
