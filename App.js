import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';

async function start() {

  // Set up the player
  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    waitForBuffer: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE
    ]
  });

  // Add a track to the queue
  await TrackPlayer.add({
      id: 'trackId',
      url: 'http://radia2.inten.pl:8984/stream.mp3',
      title: 'LPU Radio',
      artist: 'Track Artist',
      artwork: "https://i.picsum.photos/id/500/200/200.jpg"
  });

  // Start playing it
  await TrackPlayer.play();
};


export default function App() {
  const playbackState = usePlaybackState();

  useEffect(() => {
    start();
  }, []);

  return (
    <View style={styles.container}>
      <Text>LPU RADIO APP</Text>
      <Text>{ playbackState }</Text>

      { playbackState !== TrackPlayer.STATE_PLAYING && 
        <Button onPress={() => TrackPlayer.play()}
              title="Play" 
              color="#841584" 
              accessibilityLabel="Play" /> }

      { playbackState !== TrackPlayer.STATE_PAUSED && 
       <Button onPress={() => TrackPlayer.pause()} 
              title="Pause" 
              color="#841333" 
              accessibilityLabel="Pause" /> }
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
  }
});
