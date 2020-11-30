import React from 'react';
import {StyleSheet, View} from "react-native";
import {useStateValue} from "./GlobalState";
import {textColor} from "./Const";
import TextTicker from 'react-native-text-ticker'

export default function NowPlaying() {

  const [{rds}, dispatch] = useStateValue();

  return (
    <View style={styles.contanier}>
      <TextTicker
        bounce
        bounceSpeed={150}
        repeatSpacer={200}
        style={styles.text}>
        {rds.artist} - {rds.title}
      </TextTicker>
    </View>
  )
}

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
    fontWeight: '500',
    color: textColor,
  },
});
