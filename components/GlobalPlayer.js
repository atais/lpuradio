import TrackPlayer from "react-native-track-player";

export const GLOBAL_TRACK_ID = 'LPU_TRACK_ID';

export async function initializePlayer() {
  // Set up the player
  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    waitForBuffer: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
    ],
  });

  await TrackPlayer.addEventListener("remote-play", () => TrackPlayer.play());
  await TrackPlayer.addEventListener("remote-pause", () => TrackPlayer.pause());
  await TrackPlayer.addEventListener("remote-stop", () => TrackPlayer.stop());

  // Add a track to the queue
  await TrackPlayer.add({
    id: GLOBAL_TRACK_ID,
    url: 'https://icecast.lpuradio.pl/stream.mp3',
    title: 'LPU Radio',
    artist: 'LPU Radio',
    // artwork: '', fixme: implement covers
  });

  // Start playing it
  // await TrackPlayer.play();
  await TrackPlayer.pause();
}

export async function updateTrackPlayer(rds) {
  await TrackPlayer.getCurrentTrack().then((track) => {
    if (track !== undefined) {
      return TrackPlayer.updateMetadataForTrack(track, {
        title: rds.title,
        artist: rds.artist,
        // artwork: cover
      });
    } else {
      return Promise.resolve();
    }
  });
}


