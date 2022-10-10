import { FlatList, StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const DATA = require("../data/proximamente.json")

export default function TabThreeScreen() {
  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={({item})=>{
        return (
          
        )
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
