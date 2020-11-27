import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

export default function NowPlaying(props) {

  return (
    <View style={styles.contanier}>
      <View style={styles.mainbar}>
        <Text style={styles.now_playing_text}>
          Teraz odtwarzane
        </Text>
      </View>
      <View style={styles.music_logo_view}>
        <Image
          source={props.rds.teraz.okladka}
          style={styles.image_view}
        />
      </View>
      <View style={styles.name_of_song_View}>
        <Text style={styles.name_of_song_Text1}>
          {props.rds.teraz.tytul}
        </Text>
        <Text style={styles.name_of_song_Text2}>
          {props.rds.teraz.wykonawca}
        </Text>
      </View>
    </View>
  )
}

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  contanier: {
    height: Dev_Height,
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mainbar: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  now_playing_text: {
    fontSize: 19,
  },
  music_logo_view: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_view: {
    height: '100%',
    width: '50%',
    borderRadius: 10,
  },
  name_of_song_View: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name_of_song_Text1: {
    fontSize: 19,
    fontWeight: '500',
  },
  name_of_song_Text2: {
    color: '#808080',
    marginTop: '4%',
  },
});
