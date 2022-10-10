import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen({route,navigation}:any) {
  const {video_trailer} = route.params
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Modal</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/ModalScreen.tsx" />

    //   {/* Use a light status bar on iOS to account for the black space above the modal */}
    //   <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    // </View>
    <>
      <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video_trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` }}
    />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:'50%'
  }
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
