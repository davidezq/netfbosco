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
          <View style={{marginBottom:30}}>
          <WebView
                style={{flex:1,width:'100%',height:300}}
                originWhitelist={['*']}
                source={{ html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${item.youtube}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }}
              />
          <Text style={{marginBottom:5}}>Título: {item.titulo}</Text>
          <Text style={{textAlign:'justify',marginBottom:5}}>Descripción: {item.description}</Text>
          <Text>Fecha de estreno: {item.estreno}</Text>
          </View>
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
