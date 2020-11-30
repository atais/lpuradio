import {StyleSheet, View} from "react-native";
import React from "react";
import Image from 'react-native-scalable-image';
import {Dev_Width} from "./Const";

export default function TopBar() {

  return (
    <View style={styles.container}>
      <Image
        width={Dev_Width * 0.3}
        source={require('../assets/lpuradio.png')}
        style={styles.logo}
      />
      <Image
        width={Dev_Width * 0.3}
        source={require('../assets/lpu24.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
