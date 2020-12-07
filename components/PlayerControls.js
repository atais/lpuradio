import React from 'react';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import {StyleSheet, View} from 'react-native';
import IoniIcons from "react-native-vector-icons/Ionicons";
import {lpuColor, transparent} from "./Const";

export default function PlayerControls() {
  const state = usePlaybackState();
  if (state !== TrackPlayer.STATE_PLAYING) {
    return playButtonView;
  } else if (state !== TrackPlayer.STATE_PAUSED) {
    return pauseButtonView;
  } else {
    return emptyView;
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noMargin: {
    marginRight: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
});

const stopButton =
  <IoniIcons.Button
    name="stop-circle-outline"
    onPress={() => TrackPlayer.stop()}
    backgroundColor={transparent}
    underlayColor={transparent}
    size={70}
    borderRadius={0}
    iconStyle={styles.noMargin}
    color={lpuColor}
  />

const stopButtonBalancer =
  <IoniIcons.Button
    name="stop-circle-outline"
    backgroundColor={transparent}
    underlayColor={transparent}
    size={70}
    borderRadius={0}
    iconStyle={styles.noMargin}
    color={transparent}
  />

const playButton =
  <IoniIcons.Button
    name="play-circle-outline"
    onPress={() => TrackPlayer.play()}
    size={250}
    backgroundColor={transparent}
    underlayColor={transparent}
    borderRadius={0}
    iconStyle={styles.noMargin}
    color={lpuColor}
  />

const pauseButton =
  <IoniIcons.Button
    name="pause-circle-outline"
    onPress={() => TrackPlayer.pause()}
    backgroundColor={transparent}
    underlayColor={transparent}
    borderRadius={0}
    iconStyle={styles.noMargin}
    size={250}
    color={lpuColor}
  />


const playButtonView =
  <View style={styles.main}>
    <View style={styles.container}>
      {stopButtonBalancer}
      {playButton}
      {stopButton}
    </View>
  </View>

const pauseButtonView =
  <View style={styles.main}>
    <View style={styles.container}>
      {stopButtonBalancer}
      {pauseButton}
      {stopButton}
    </View>
  </View>

const emptyView = <View style={styles.main}/>

