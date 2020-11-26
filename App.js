import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import PlayerControls from './components/PlayerControls';
import Rds from './components/Rds';
import Const from './Const';

async function start() {
  // Set up the player
  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    waitForBuffer: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
    ],
  });

  // Add a track to the queue
  await TrackPlayer.add({
    id: Const.GLOBAL_TRACK_ID,
    url: 'http://radia2.inten.pl:8984/stream.mp3',
    title: 'LPU Radio',
    artist: 'Track Artist',
    artwork: 'https://i.picsum.photos/id/500/200/200.jpg',
  });

  // Start playing it
  // await TrackPlayer.play();
  await TrackPlayer.pause();
}

export default function App() {
  const playbackState = usePlaybackState();

  useEffect(() => {
    start();
  }, []);

  return (
    <View style={styles.container}>
      <Text>LPU RADIO APP</Text>

      <PlayerControls state={playbackState}/>
      <Rds/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    width: 0,
    height: 0,
  },
});
