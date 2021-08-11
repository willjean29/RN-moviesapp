import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Movie} from 'interfaces/movieDb.interface';
import PosterMovie from 'components/PosterMovie';

export interface SliderHorizontalProps {
  dataMovie: Movie[];
  title?: string;
}

const SliderHorizontal: React.FC<SliderHorizontalProps> = ({
  dataMovie,
  title,
}) => {
  return (
    <View
      style={{
        height: title ? 240 : 200,
      }}>
      {title && <Text style={styles.txtTitleSlider}>{title}</Text>}
      <FlatList
        data={dataMovie}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, index}) => (
          <PosterMovie movie={item} width={120} height={200} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={
          {
            // borderWidth: 3,
          }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  txtTitleSlider: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 10,
  },
});

export default SliderHorizontal;
