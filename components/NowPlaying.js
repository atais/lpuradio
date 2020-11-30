import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function NowPlaying(props) {

  return (
    <View style={styles.contanier}>
        <View style={styles.mainbar}>
          <Text style={styles.now_playing_text}>
            Poprzednio otworzone...
          </Text>
        </View>
        <Text style={styles.name_of_song_Text1}>
          {props.rds.title}
        </Text>
        <Text style={styles.name_of_song_Text2}>
          {props.rds.artist}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'column',
  },
  queue_text: {
    fontSize: 19,
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
