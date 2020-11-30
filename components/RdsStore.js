import React, {useEffect, useState} from 'react';
import TrackPlayer from 'react-native-track-player';
import NowPlaying from "./NowPlaying";

export function RdsStore() {
  const [rds, setRds] = useState(emptyContext);

  useEffect(() => {
    tick();
    setInterval(() => tick(), 10000);
  }, []);

  async function updateTrackPlayer(rds) {
    console.log(rds);
    TrackPlayer.getCurrentTrack().then((track) => {
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

  async function tick() {
    await fetch('https://lpuradio.pl/rds/rds.json')
      .then((r) => r.json())
      .then(
        (res) => {
          return {
            title: res.teraz.tytul,
            artist: res.teraz.wykonawca,
            // todo: https is necessary
            // cover = {uri: res.teraz.okladka};
          };
        },
        (error) => {
          console.log('error updating rds: ' + error);
          setRds(emptyContext);
        },
      )
      .then((s) => {
        setRds(s, updateTrackPlayer(s))
      })
  }

  return (<NowPlaying rds={rds}/>);
}

const emptyContext = {
  tytul: '',
  wykonawca: '',
};
