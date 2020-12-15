import {Linking, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import Image from "react-native-scalable-image";
import {Dev_Height, Dev_Width, lpuColor, textColor, transparent} from "./Const";
import HTMLView from "react-native-htmlview";
import IoniIcons from "react-native-vector-icons/Ionicons";

export default function NewsItem(props) {

  const content = props.content;
  const setContent = props.setContentFn;

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView horizontal={false} style={styles.content}>
        <Text style={styles.title}>
          {content.title}
        </Text>
        <Image width={Dev_Width - 20} source={content.bigImg}/>
        <HTMLView stylesheet={htmlStyles}
                  style={styles.news}
                  addLineBreaks={false}
                  value={content.content}
        />
      </ScrollView>
      <View style={styles.buttons}>
        <IoniIcons.Button
          name="arrow-back"
          onPress={() => setContent({})}
          backgroundColor={transparent}
          underlayColor={transparent}
          size={30}
          borderRadius={0}
          iconStyle={styles.noMargin}
          color={lpuColor}
        >Wróć do listy
        </IoniIcons.Button>
        <IoniIcons.Button
          name="open-outline"
          onPress={() => Linking.openURL(content.id)}
          backgroundColor={transparent}
          underlayColor={transparent}
          size={30}
          borderRadius={0}
          iconStyle={styles.noMargin}
          color={lpuColor}
        >Zobacz na stronie
        </IoniIcons.Button>
      </View>
    </SafeAreaView>
  )
}

const htmlStyles = StyleSheet.create({
  p: {
    fontSize: 15,
    color: textColor,
    textAlign: 'justify',
  },
  pre: {
    fontSize: 15,
    color: textColor,
    textAlign: 'justify',
  },
  marginBottom: 10,
});

const styles = StyleSheet.create({
  view: {
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: transparent,
    justifyContent: 'space-between',
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: textColor,
    fontSize: 25,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
  },
  news: {
    marginTop: 15,
  },
});
