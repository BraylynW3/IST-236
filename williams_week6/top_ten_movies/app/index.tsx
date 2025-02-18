import { Text, View , StyleSheet, SafeAreaView, FlatList, Image, ImageSourcePropType} from "react-native";
import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';

interface Movies {
  id: string;
  title: string;
  rating: string;
  moviePoster: string;
}

const DATA: Movies[] = [
    {id: '1', title: 'Captain America: Brave New World', rating: '6.1 ★', moviePoster: require('@/assets/images/bravenewworld.jpg')},
    {id: '2', title: 'Paddington in Peru', rating: '6.8 ★', moviePoster: require('@/assets/images/paddingtonperu.jpg')},
    {id: '3', title: 'Heart Eyes', rating: '6.6 ★', moviePoster: require('@/assets/images/hearteyes.jpg')},
    {id: '4', title: 'Dog Man', rating: '6.4 ★', moviePoster: require('@/assets/images/Dog_Man_film_poster.jpg')},
    {id: '5', title: 'Ne Zha 2', rating: '8.4 ★', moviePoster: require('@/assets/images/nezha2.jpg')},
    {id: '6', title: 'Love Hurts', rating: '5.4 ★', moviePoster: require('@/assets/images/lovehurts.jpg')},
    {id: '7', title: 'Mufasa: The Lion King', rating: '6.7 ★', moviePoster: require('@/assets/images/mufasa.jpg')},
    {id: '8', title: 'One of Them Days', rating: '6.8 ★', moviePoster: require('@/assets/images/oneofthemdays.jpg')},
    {id: '9', title: 'Companion', rating: '7.3 ★', moviePoster: require('@/assets/images/companion.jpg')},
    {id: '10', title: 'Chhaava', rating: '8.2 ★', moviePoster: require('@/assets/images/chhaava.jpg')}
]

const ItemComponent = ({ movie }: { movie: Movies}) =>
(
  <View style={styles.movieContainer}>
    <View style={styles.movieInfo}>
    <Text style={styles.movieRank}>{movie.id}</Text>
    <Text style={styles.movieTitle}>{movie.title}</Text>
    <Text>{movie.rating}</Text>
    </View>
    <Image source = {movie.moviePoster as ImageSourcePropType} 
    style={styles.poster}/>
  </View>
);


export default function Index() {

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
          <Text style={styles.subtitle}>2/14-2/16 in the US</Text>
          <FlatList 
            data = {DATA}
            renderItem={({ item }) =>
              <ItemComponent movie = { item } />
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    backgroundColor: "rgb(255, 247, 235)",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'rgb(253, 62, 3)',
    textShadowColor: 'rgba(170, 159, 155, 0.71)',
    textShadowOffset: {width: 3, height: 2},
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 15,
    fontStyle: "italic",
    paddingTop: 10,
    paddingBottom: 20,
  },
  movieContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(214, 141, 81, 0.51)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 355,
  },
  movieRank: {
    padding: 20,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgb(255, 60, 0)',
    textShadowColor: 'rgb(255, 247, 235)',
    textShadowOffset: {width: 3, height: 2},
    textShadowRadius: 0,
  },
  movieInfo: {
    flexDirection: 'column',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: 200,
  },
  poster: {
    height: 150,
    width: 100,
  }
});