import {Linking, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import Image from "react-native-scalable-image";
import {Dev_Width, lpuColor, textColor, transparent} from "./Const";
import HTMLView from "react-native-htmlview";
import IoniIcons from "react-native-vector-icons/Ionicons";

export default function NewsItem(props) {

  const content = {
    "title": "39 lat od ogłoszenia stanu wojennego [FOTO]",
    "links": [
      {
        "url": "https://lpu24.pl/2020/12/13/39-lat-od-ogloszenia-stanu-wojennego-foto/?utm_source=rss&utm_medium=rss&utm_campaign=39-lat-od-ogloszenia-stanu-wojennego-foto",
        "rel": ""
      }
    ],
    "description": "13 grudnia 1981 roku, na mocy dekretu Rady Państwa został wprowadzony w Polsce stan wojenny. Od tego momentu minęło już 39 lat. Ówczesne władze dzień wcześniej rozpoczęły aresztowania wśród działaczy opozycji i &#8220;Solidarności&#8221;. Blisko 5 tys. osób zostało przewiezionych do ośrodków internowania. W Puławach tylko pierwszej doby zatrzymano 7 osób. W ręce Milicji Obywatelskiej trafili &#8230;",
    "content": "<p style=\"text-align: justify;\">W niedzielny poranek przed bramą nr 1 Zakładów Azotowych w Puławach związkowcy z zakładowej Solidarności zorganizowali uroczystość z okazji rocznicy ogłoszenia stanu wojennego. Przed tablicą upamiętniającą te wydarzenia złożono kwiaty i zapalono znicze. W uroczystości wzięli udział związkowcy, poseł PiS Krzysztof Szumowski, przedstawiciele Rady Miasta, Powiatu, placówek oświatowych z terenu miasta, a także reprezentant zarządu Grupy Azoty Puławy. Po zakończeniu uroczystości uczestnicy przeszli pod pomnik Solidarności, który dwa lata temu stanął nieopodal skrzyżowania dróg dojazdowych do budynku dyrekcji Grupy Azoty Puławy i poświęcony jest m.in. bohaterom strajków także w Zakładach Azotowych.</p>\n<p style=\"text-align: justify;\">W samo południe rocznicę ogłoszenia stanu wojennego wspominali także działacze Forum Obywatelskiego. Na Placu Chopina w kameralnym gronie mieszkańcy wysłuchali informacji o wydarzeniach sprzed 39 lat, wspominano także bohaterów tamtych wydarzeń, przypomniano nazwiska osób represjonowanych i aresztowanych w pierwszych dniach stanu wojennego, jak również tych, które za swoją opozycyjną działalność zostały skazane na więzienie.</p>\n<p><img loading=\"lazy\" class=\"alignnone wp-image-4922 size-large\" src=\"https://lpu24.pl/wp-content/uploads/2020/12/13gr_1-1024x576.jpg\" alt=\"\" width=\"1024\" height=\"576\" /></p>\n<p><img loading=\"lazy\" class=\"alignnone wp-image-4923 size-large\" src=\"https://lpu24.pl/wp-content/uploads/2020/12/13gr_2-1024x576.jpg\" alt=\"\" width=\"1024\" height=\"576\" /></p>\n<p><img loading=\"lazy\" class=\"alignnone wp-image-4924 size-large\" src=\"https://lpu24.pl/wp-content/uploads/2020/12/13gr_3-1024x576.jpg\" alt=\"\" width=\"1024\" height=\"576\" /></p>\n<p><img loading=\"lazy\" class=\"alignnone wp-image-4925 size-large\" src=\"https://lpu24.pl/wp-content/uploads/2020/12/13gr_4-1024x576.jpg\" alt=\"\" width=\"1024\" height=\"576\" /></p>\n<p><img loading=\"lazy\" class=\"alignnone wp-image-4926 size-large\" src=\"https://lpu24.pl/wp-content/uploads/2020/12/13gr_5-1024x576.jpg\" alt=\"\" width=\"1024\" height=\"576\" /></p>\n",
    "id": "https://lpu24.pl/?p=4921",
    "authors": [
      {
        "name": "Paweł Skibniewski"
      }
    ],
    "categories": [
      {
        "name": "Fotorelacje"
      },
      {
        "name": "Miasto Puławy"
      }
    ],
    "published": "Sun, 13 Dec 2020 17:56:04 +0000",
    "enclosures": [
      {
        "url": "https://lpu24.pl/wp-content/uploads/2020/12/13gr_4.jpg",
        "length": "963648",
        "mimeType": "image/jpg"
      }
    ],
    "itunes": {
      "authors": []
    },
    "smallImg": {
      "uri": "https://lpu24.pl/wp-content/uploads/2020/12/13gr_4-390x220.jpg"
    },
    "bigImg": {
      "uri": "https://lpu24.pl/wp-content/uploads/2020/12/13gr_4.jpg"
    }
  }

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
