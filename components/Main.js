import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import LpuRadio from "./LpuRadio";
import {initializePlayer} from "./GlobalPlayer";
import {TopBar} from "./TopBar";

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]}/>
);

const initialLayout = {width: Dimensions.get('window').width};

export default function App() {

  React.useEffect(() => {
    initializePlayer();
  }, []);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'radio', title: 'Radio'},
    {key: 'news', title: 'News'},
  ]);

  const renderScene = SceneMap({
    radio: LpuRadio,
    news: SecondRoute,
  });

  return (
    <TabView
      renderTabBar={TopBar} // todo: which is nicer?
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
