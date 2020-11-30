import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {textColor} from "./Const";
import {emptyRds, useStateValue} from "./GlobalState";
const equal = require('fast-deep-equal/react');

export default function RecentlyPlayed() {

  const [{rds}, dispatch] = useStateValue();
  const [previous, setPrevious] = useState([]);

  function updateRecentlyPlayed() {
    if (rds !== emptyRds) {
      if (previous.length === 0 || !equal(rds, previous[0])) {
        previous.unshift(rds);
      }
    }
    if (previous.length > 5) {
      previous.pop();
    }
  }

  useEffect(updateRecentlyPlayed, [rds])

  return (
    <View style={styles.view}>
      <Text style={styles.recent}>Poprzednie utwory</Text>

      <View style={styles.list}>
        {
          previous.map(item => (
            <Text style={styles.prev} key={JSON.stringify(item)}>
              {item.artist} - {item.title}
            </Text>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '25%',
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
