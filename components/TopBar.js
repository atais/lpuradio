import {StyleSheet, View} from "react-native";
import React from "react";
import Image from 'react-native-scalable-image';
import {bgColor, Dev_Width, lpuColor} from "./Const";

export default function TopBar(props) {

  console.log(props)
  const i = props.navigationState.index;

  if (i === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.active}>
          {radioIcon}
        </View>
        <View style={styles.inactive}>
          {newsIcon}
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.inactive}>
          {radioIcon}
        </View>
        <View style={styles.active}>
          {newsIcon}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inactive: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: bgColor,
    borderBottomWidth: 2,
  },
  active: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: lpuColor,
    borderBottomWidth: 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: bgColor,
  },
});

const radioIcon =
  <Image
    width={Dev_Width * 0.3}
    source={require('../assets/lpuradio.png')}
    style={styles.logo}
  />

const newsIcon =
  <Image
    width={Dev_Width * 0.3}
    source={require('../assets/lpu24.png')}
    style={styles.logo}
  />
