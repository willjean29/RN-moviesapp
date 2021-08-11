import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import useMovies from 'hooks/useMovies';
import PosterMovie from 'components/PosterMovie';
import SliderHorizontal from 'components/SliderHorizontal';
import BackgroundGradient from 'components/BackgroundGradient';
import {UiContext} from 'context/UiState';
import {URL_BASE_IMG} from 'react-native-dotenv';
import {getImageColors} from 'helpers/getImageColors';

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  const {width} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const {setColors} = useContext(UiContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `${URL_BASE_IMG}${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setColors({
      primary,
      secondary,
    });
  };
  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.viewContaineSpinner}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <BackgroundGradient>
      <ScrollView
        style={{
          paddingTop: insets.top + 20,
          flex: 1,
        }}>
        <>
          <View>
            <Carousel
              data={nowPlaying}
              renderItem={({item, index}) => <PosterMovie movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <View style={{marginBottom: insets.bottom + 80}}>
            <SliderHorizontal dataMovie={popular} title="Popular" />
            <SliderHorizontal dataMovie={topRated} title="Top Rated" />
            <SliderHorizontal dataMovie={upcoming} title="Upcomming" />
          </View>
        </>
      </ScrollView>
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  viewContaineSpinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
