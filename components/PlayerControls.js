import React, {Component} from 'react';
import TrackPlayer from 'react-native-track-player';
import {Button, Text, View} from 'react-native';

class PlayerControls extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let state = this.props.state;
    if (state !== TrackPlayer.STATE_PLAYING) {
      return (
        <View>
          <Text>{state}</Text>
          <Button
            onPress={() => TrackPlayer.play()}
            title="Play"
            color="#841584"
            accessibilityLabel="Play"
          />
        </View>
      );
    } else if (state !== TrackPlayer.STATE_PAUSED) {
      return (
        <View>
          <Text>{state}</Text>
          <Button
            onPress={() => TrackPlayer.stop()}
            title="Stop"
            color="#841333"
            accessibilityLabel="Stop"
          />
          <Button
            onPress={() => TrackPlayer.pause()}
            title="Pause"
            color="#841333"
            accessibilityLabel="Pause"
          />
        </View>
      );
    } else {
      return <View></View>;
    }
  }

}

export default PlayerControls;
