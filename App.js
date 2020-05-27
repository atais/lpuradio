import React, { useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const start = async () => {
  // Set up the player
  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP
    ],
    compactCapabilities: [
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
 
  useEffect(() => {
    start();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
