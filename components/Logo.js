import {StyleSheet, View} from "react-native";
import React from "react";
import Image from 'react-native-scalable-image';
import {Dev_Width} from "./Const";

export default function Logo() {

  return (
    <View style={styles.contanier}>
      <Image
        width={Dev_Width * 0.3}
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flexDirection: 'row',
  },
});
