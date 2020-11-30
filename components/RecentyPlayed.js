import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {textColor} from "./Const";

export default function RecentlyPlayed() {

  return (
    <View style={styles.view}>
      <Text style={styles.recent}>Poprzednie utwory</Text>

      <View style={styles.list}>
        <Text style={styles.prev}>
          - Start With SEO - By Setup Cast
        </Text>
        <Text style={styles.prev}>
          - Start With SEO - By Setup Cast
        </Text>
        <Text style={styles.prev}>
          - Start With SEO - By Setup Cast
        </Text>
        <Text style={styles.prev}>
          - Start With SEO - By Setup Cast
        </Text>
        <Text style={styles.prev}>
          - Start With SEO - By Setup Cast
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '25%',
    paddingLeft: 20,
    paddingTop: 20,
  },
  recent: {
    fontSize: 15,
    color: textColor,
    fontWeight: '700',
    marginBottom: 15,
  },
  list: {},
  prev: {
    color: textColor,
    marginBottom: 10,
  }

});
