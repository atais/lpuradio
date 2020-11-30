import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import PlayerControls from "./PlayerControls";
import {initialState, reducer, StateProvider} from "./GlobalState";
import {bgColor, Dev_Height, Dev_Width} from "./Const";
import {RdsService} from "./RdsService";
import NowPlaying from "./NowPlaying";
import RecentlyPlayed from "./RecentyPlayed";

export default function LpuRadio() {

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <SafeAreaView style={styles.container}>
        <RdsService/>
        <View/>
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
  container: {
    height: Dev_Height,
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: bgColor,
    padding: 20
  }
});
