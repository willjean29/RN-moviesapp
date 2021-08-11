import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Movie} from 'interfaces/movieDb.interface';
import {URL_BASE_IMG} from 'react-native-dotenv';

export interface PosterMovieProps {
  movie: Movie;
  width?: number;
  height?: number;
}

const PosterMovie: React.FC<PosterMovieProps> = ({
  movie,
  width = 300,
  height = 440,
}) => {
  const uri = `${URL_BASE_IMG}${movie.poster_path}`;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('DetailMovieScreen', {
          movie: movie,
        })
      }
      style={{
        ...styles.viewContainerPsoterMovie,
        width,
        height,
      }}>
      <View style={styles.viewConatinerPoster}>
        <Image
          source={{
            uri,
          }}
          style={styles.imgPoster}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewContainerPsoterMovie: {
    borderRadius: 10,
    marginHorizontal: 7,
  },
  viewConatinerPoster: {
    marginBottom: 20,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderRadius: 10,
  },
  imgPoster: {
    flex: 1,
    borderRadius: 10,
  },
});

export default PosterMovie;
