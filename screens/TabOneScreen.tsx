import { StyleSheet, Image, ScrollView, TouchableHighlight, FlatList } from 'react-native';

import { comedia, RootTabScreenProps } from '../types';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CarouselPeliculaComedia from '../components/CarouselPeliculaComedia';
import CarouselPeliculaRomance from '../components/CarouselPeliculaRomance';
import CarouselPeliculaAccion from '../components/CarouselPeliculaAccion';

const PELICULAS = require("../data/peliculas.json")

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <ScrollView>

      <View style={styles.container}>
        <TouchableHighlight onPress={() => { navigation.navigate('Modal', { video_trailer: "30R7Io_DmyU" }) }}>
          <Image style={{ width: '100%', height: 250, resizeMode: 'contain' }} source={require("../assets/images/peliculas/1.jpg")} />
        </TouchableHighlight>

        <Text style={styles.subtitle}>Comedia 😂</Text>
        <FlatList
          data={PELICULAS.comedia}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight onPress={() => { navigation.navigate('Modal', { video_trailer: item.youtube }) }}>
                <Image style={styles.image}
                  source={{ uri: item.img }}
                />
              </TouchableHighlight>
            )
          }}
          horizontal />

        <View style={styles.center}>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>

        <Text style={styles.subtitle}>Romance ❤️ </Text>
        <FlatList
          data={PELICULAS.romance}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight onPress={() => { navigation.navigate('Modal', { video_trailer: item.youtube }) }}>
                <Image style={styles.image}
                  source={{ uri: item.img }}
                />
              </TouchableHighlight>
            )
          }}
          horizontal />

        <View style={styles.center}>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>

        <Text style={styles.subtitle}>Acción 💥</Text>
        <FlatList
          data={PELICULAS.accion}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight onPress={() => { navigation.navigate('Modal', { video_trailer: item.youtube }) }}>
                <Image style={styles.image}
                  source={{ uri: item.img }}
                />
              </TouchableHighlight>
            )
          }}
          horizontal />



        {/* <View style={styles.center}>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>

        <Text style={styles.subtitle}>Romance ❤️ </Text>
        <CarouselPeliculaRomance />

        <View style={styles.center}>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>

        <Text style={styles.subtitle}>Acción 💥</Text>
        <CarouselPeliculaAccion /> */}
      </View>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2.5%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scroll: {
    maxHeight: 326
  },
  image: {
    marginHorizontal: 5,
    width: 220,
    height: 326,
  }
});
