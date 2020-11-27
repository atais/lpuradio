import TrackPlayer from "react-native-track-player";

export const GLOBAL_TRACK_ID = 'LPU_TRACK_ID';

export async function initializePlayer() {
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
    id: GLOBAL_TRACK_ID,
    url: 'http://radia2.inten.pl:8984/stream.mp3',
    title: 'LPU Radio',
    artist: 'Track Artist',
    artwork: 'https://i.picsum.photos/id/500/200/200.jpg',
  });

  // Start playing it
  // await TrackPlayer.play();
  await TrackPlayer.pause();
}