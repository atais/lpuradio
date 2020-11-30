import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import PlayerControls from "./components/PlayerControls";
import {initializePlayer} from "./components/GlobalPlayer";
import {initialState, reducer, StateProvider} from "./components/GlobalState";
import Logo from "./components/Logo";
import {Dev_Height, Dev_Width} from "./components/Const";
import {RdsStore} from "./components/RdsStore";

export default function App() {
  useEffect(() => {
    initializePlayer();
  }, []);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>

      <SafeAreaView style={styles.contanier}>
        <Logo/>


        <PlayerControls/>
        <RdsStore/>

        <View/>
      </SafeAreaView>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  contanier: {
    height: Dev_Height,
    width: Dev_Width,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  }
});
