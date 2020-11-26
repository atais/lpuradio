import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';

class Rds extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
    this.tick();
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  async tick() {
    await fetch('http://lpuradio.pl/rds/rds.json')
      .then((r) => r.json())
      .then(
        (res) => {
          if (
            res.teraz.okladka === undefined ||
            res.teraz.okladka.trim() === ''
          ) {
            let generic = res;
            generic.teraz.okladka = defaultCover;
            this.setState(generic);
          } else {
            let updated = res;
            // todo: necessary for ios
            // let withHttps = res.teraz.okladka.replace('http://', 'https://');
            updated.teraz.okladka = {uri: res.teraz.okladka};
            this.setState(updated);
          }

          return TrackPlayer.getCurrentTrack().then((track) => {
            if (track !== undefined) {
              TrackPlayer.updateMetadataForTrack(track, {
                title: this.state.teraz.tytul,
                artist: this.state.teraz.wykonawca,
                artwork: this.state.teraz.okladka,
              });
            }
          });
        },
        (error) => {
          console.log(error);
          this.setState(defaultState);
        },
      );
  }

  render() {
    return (
      <View>
        <Text>RDS</Text>
        <Text/>
        <Text>Poprzednio</Text>
        <Text>{this.state.poprzednio.tytul}</Text>
        <Text>{this.state.poprzednio.wykonawca}</Text>
        <Text/>
        <Text>Teraz</Text>
        <Text>{this.state.teraz.tytul}</Text>
        <Text>{this.state.teraz.wykonawca}</Text>
        <Image style={styles.tinyLogo} source={this.state.teraz.okladka}/>
        <Text/>
        <Text>Następnie</Text>
        <Text>{this.state.zaraz.tytul}</Text>
        <Text>{this.state.zaraz.wykonawca}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

// const defaultCover = require('../images/defaultCover.jpg');
const defaultCover = {
  uri:
    'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
};
const defaultState = {
  poprzednio: {tytul: '', wykonawca: ''},
  teraz: {
    tytul: '',
    wykonawca: '',
    okladka: defaultCover,
  },
  zaraz: {tytul: '', wykonawca: ''},
};

export default Rds;
