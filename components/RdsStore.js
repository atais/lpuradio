import React, {useEffect, useState} from 'react';
import TrackPlayer from 'react-native-track-player';
import NowPlaying from "./NowPlaying";

export function RdsStore() {
  const [rds, setRds] = useState(emptyContext);

  useEffect(() => {
    tick();
    setInterval(() => tick(), 10000);
  }, []);

  async function updateTrackPlayer(teraz) {
    console.log(rds);
    TrackPlayer.getCurrentTrack().then((track) => {
      if (track !== undefined) {
        return TrackPlayer.updateMetadataForTrack(track, {
          title: teraz.tytul,
          artist: teraz.wykonawca,
          artwork: teraz.okladka,
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
          // if (res.teraz.okladka === undefined || !res.teraz.okladka.includes('http')) {
          let generic = res;
          generic.teraz.okladka = defaultCover;
          return generic;
          // } else {
          //   let updated = res;
          //   todo: necessary for ios
          //   let withHttps = res.teraz.okladka.replace('http://', 'https://');
          // updated.teraz.okladka = {uri: res.teraz.okladka};
          // return updated;
          // }
        },
        (error) => {
          console.log('error updating rds: ' + error);
          setRds(emptyContext);
        },
      )
      .then((s) => {
        setRds(s, updateTrackPlayer(s.teraz))
      })
  }

  return (<NowPlaying rds={rds}/>);
}

const defaultCover = require('../assets/defaultCover.jpg');
const emptyContext = {
  poprzednio: {tytul: '', wykonawca: ''},
  teraz: {
    tytul: '',
    wykonawca: '',
    okladka: defaultCover,
  },
  zaraz: {tytul: '', wykonawca: ''},
};
