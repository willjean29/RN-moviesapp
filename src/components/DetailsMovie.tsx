import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from 'components/CastItem';
import {Cast, MovieFullInterface} from 'interfaces/deatilsMovie.interface';

export interface DetailsMovieProps {
  detailsMovie: MovieFullInterface;
  cast: Cast[];
}
const DetailsMovie: React.FC<DetailsMovieProps> = ({detailsMovie, cast}) => {
  return (
    <View>
      <View style={styles.viewContainerInformation}>
        <View style={styles.viewContainerCategories}>
          <Icon name="star-outline" color="#000" size={16} />
          <Text style={styles.txtVotes}>{detailsMovie.vote_average}</Text>
          <Text> - {detailsMovie.genres.map(g => g.name).join(', ')}</Text>
        </View>
        {/* Hsitoria */}
        <Text style={styles.txtTitle}>Hsitoria</Text>
        <Text style={styles.txtDescription}>{detailsMovie.overview}</Text>
        {/* Presupuesto */}
        <Text style={styles.txtTitle}>Presupuesto</Text>
        <Text style={styles.txtDescription}>
          {currencyFormatter.format(detailsMovie.budget, {code: 'USD'})}
        </Text>
      </View>

      <View style={{marginVertical: 20}}>
        <FlatList
          data={cast}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerInformation: {
    marginHorizontal: 20,
  },
  viewContainerCategories: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtVotes: {
    marginLeft: 5,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 10,
  },
  txtDescription: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default DetailsMovie;
