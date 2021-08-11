import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigationParams} from 'navigation/StackNavigation';
import useMovieDetails from 'hooks/useMovieDetails';
import DetailsMovie from 'components/DetailsMovie';
import {URL_BASE_IMG} from 'react-native-dotenv';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface DetailMovieScreenProps
  extends StackScreenProps<StackNavigationParams, 'DetailMovieScreen'> {}

const DetailMovieScreen: React.FC<DetailMovieScreenProps> = ({
  route,
  navigation,
}) => {
  const {movie} = route.params;
  const uri = `${URL_BASE_IMG}${movie.poster_path}`;
  const {width, height} = useWindowDimensions();
  const {isLoading, cast, detailsMovie} = useMovieDetails(movie.id);
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      <View style={{marginBottom: insets.bottom + 20}}>
        <View
          style={{
            ...styles.viewConatinerPoster,
            width: width,
            height: height * 0.75,
          }}>
          <View style={styles.viewContainerImage}>
            <Image
              source={{
                uri,
              }}
              style={styles.imgPoster}
            />
          </View>
        </View>
        <View style={styles.viewConatinerTitles}>
          <Text style={styles.txtOriginalTitle}>{movie.original_title}</Text>
          <Text style={styles.txtTitle}>{movie.title}</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator color="red" size={40} />
        ) : (
          <DetailsMovie detailsMovie={detailsMovie!} cast={cast} />
        )}
        <View style={{...styles.viewContainerBackButton, top: insets.top}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" color="#FFF" size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewConatinerPoster: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  viewContainerImage: {
    flex: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    overflow: 'hidden',
  },
  imgPoster: {
    flex: 1,
  },
  viewConatinerTitles: {
    marginHorizontal: 20,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  txtOriginalTitle: {
    color: 'gray',
    fontSize: 16,
  },
  viewContainerBackButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    left: 10,
  },
});

export default DetailMovieScreen;
