import {StyleSheet} from "react-native";
import React from "react";
import Image from 'react-native-scalable-image';
import {bgColor, Dev_Width, lpuColor} from "./Const";
import {TabBar} from "react-native-tab-view";


export const TopBar = props => (
  <TabBar
    {...props}
    style={{backgroundColor: bgColor}}
    indicatorStyle={{backgroundColor: lpuColor}}
    renderLabel={({route, focused, color}) => null}
    renderIcon={({route, focused, color}) => {
      if (route.key === 'radio') {
        return radioIcon
      } else if (route.key === 'news') {
        return newsIcon
      }
    }}
  />
);

const styles = StyleSheet.create({});

const radioIcon =
  <Image
    width={Dev_Width * 0.2}
    source={require('../assets/lpuradio.png')}
  />

const newsIcon =
  <Image
    width={Dev_Width * 0.2}
    source={require('../assets/lpu24.png')}
  />
