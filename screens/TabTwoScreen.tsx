import { StyleSheet, TouchableHighlight, Image, FlatList, SectionList, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { RootTabScreenProps } from '../types';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const DATA = require("../data/series.json");

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
      // <View style={styles.container}>
      <>

        <SectionList
           style={{flex:1}}
           sections={
              [
                {title: DATA.comedia[0],data:[],index:0},
                {title: 'Comedia 😂', data: DATA.comedia, index:1},
                {title: 'Aventura ⚔️', data: DATA.aventura, index:2},
                {title: 'Fantasia 🧙‍♂️', data: DATA.fantasia, index:3},
              ]
           }
            renderItem={({item}) => {return (
              <Grid style={{marginVertical:30}}>
                <Col>
                  <TouchableOpacity onPress={() => { navigation.navigate('Modal' as never, { video_trailer: item.youtube } as never ) }}>
                    <Image style={styles.image} source={{uri:item.img}}></Image>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <Row style={{alignItems:'flex-end'}}>
                    <Text>{item.name}</Text>
                  </Row>
                  <Row>
                    <Text>Temporadas:{item.temporadas}</Text>
                  </Row>
                </Col>
              </Grid>
              
            )}}       
            renderSectionHeader={({section}) => {
              if(section.index === 0){
                return(
                  <TouchableHighlight onPress={() => { navigation.navigate('Modal' as never, { video_trailer: section.title.youtube } as never ) }}>
                    <Image style={{ width: '100%', height: 250, resizeMode: 'contain' }} source={{uri: "https://www.filme.de/wp-content/uploads/2020/06/cobra-kai-staffel-3-geht-zu-netflix-artikelbild.jpg"}} />
                  </TouchableHighlight>
                )
              }
              return(
                <>
                  <View style={styles.center}>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                  </View>
                  <Text style={styles.subtitle}>{section.title}</Text>
                </>
              )
            }}
        />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:5,
    marginBottom: 15
  },
  image: {
    marginHorizontal: 5,
    width: 192,
    height: 192,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
