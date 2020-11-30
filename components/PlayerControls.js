import React from 'react';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import {StyleSheet, View} from 'react-native';
import IoniIcons from "react-native-vector-icons/Ionicons";

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

const transparent = 'transparent'
const lpuColor = '#7dbf13';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const stopButton =
  <IoniIcons.Button
    name="stop-circle-outline"
    onPress={() => TrackPlayer.stop()}
    backgroundColor={transparent}
    underlayColor={transparent}
    size={70}
    color={lpuColor}
  />

const playButtonView =
  <View style={styles.container}>
    <IoniIcons.Button
      name="play-circle-outline"
      onPress={() => TrackPlayer.play()}
      size={250}
      backgroundColor={transparent}
      underlayColor={transparent}
      color={lpuColor}
    />
    {stopButton}
  </View>

const pauseButtonView =
  <View style={styles.container}>
    <IoniIcons.Button
      name="pause-circle-outline"
      onPress={() => TrackPlayer.pause()}
      backgroundColor={transparent}
      underlayColor={transparent}
      size={250}
      color={lpuColor}
    />
    {stopButton}
  </View>

const emptyView = <View/>
