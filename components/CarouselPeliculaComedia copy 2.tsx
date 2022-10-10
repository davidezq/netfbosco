import { View, FlatList, Image, ScrollView, StyleSheet, Text} from "react-native"
import { comedia } from "../types"

type CarouselArgs = {
    peliculasComedia:comedia[]
}

export default function CarouselPeliculaComedia() {
  return (

        <ScrollView style={styles.scroll} horizontal>
            <View>
                <Image style={styles.image}
                    source={require("../assets/images/peliculas/comedia/1.jpeg")}
                />
            </View>
            <View >
                <Image style={styles.image}
                    source={require("../assets/images/peliculas/comedia/2.jpg")}
                />
            </View>
            <View >
                <Image style={styles.image}
                    source={require("../assets/images/peliculas/comedia/3.jpg")}
                />
            </View>
            <View>
                <Image style={styles.image}
                    source={require("../assets/images/peliculas/comedia/4.jpg")}
                />
            </View>
            <View>
                <Image style={styles.image}
                    source={require("../assets/images/peliculas/comedia/5.jpg")}
                />
            </View>
            <View>
                <Image style={styles.image}
                    source={require("../assets/images/peliculas/comedia/6.jpg")}
                />
            </View>
        </ScrollView>

        // <FlatList
        //     data={args.peliculasComedia}
        //     style={styles.image}
        //     renderItem={({ item }) => {
        //         return(
        //             <Image
        //                 source={require("../assets/images/peliculas/comedia/6.jpg")}
        //                 resizeMode="center"                  
        //             />
        //         )
        //     }}
        //     horizontal={true}
        // />
  )
}

const styles = StyleSheet.create({
    scroll:{
        maxHeight:326
    },
    image:{
        marginHorizontal:5,
        width:220,
        height:326,
    }
})