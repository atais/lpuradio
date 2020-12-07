import React from 'react';
import {StyleSheet, View} from "react-native";
import {useStateValue} from "./GlobalState";
import {textColor} from "./Const";
import TextTicker from 'react-native-text-ticker'

export default function NowPlaying() {

  const [{rds}, dispatch] = useStateValue();

  return (
    <View style={styles.container}>
      <TextTicker
        bounce
        bounceSpeed={200}
        repeatSpacer={200}
        style={styles.text}>
        {rds.artist} - {rds.title}
      </TextTicker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: textColor,
  },
});
