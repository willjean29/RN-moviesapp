import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from 'interfaces/deatilsMovie.interface';
import {URL_BASE_IMG} from 'react-native-dotenv';
export interface CastItemProps {
  actor: Cast;
}

const CastItem: React.FC<CastItemProps> = ({actor}) => {
  const uri = `${URL_BASE_IMG}${actor.profile_path}`;
  const uriDefault =
    'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';
  return (
    <View style={styles.viewContainerActor}>
      <Image
        source={{uri: actor.profile_path ? uri : uriDefault}}
        style={styles.imgProfileActor}
      />
      <View style={styles.viewDataActor}>
        <Text style={styles.txtName}>{actor.name}</Text>
        <Text style={styles.txtCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerActor: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    elevation: 5,
  },
  imgProfileActor: {
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 2,
  },
  viewDataActor: {
    marginHorizontal: 10,
  },
  txtName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  txtCharacter: {
    color: 'gray',
    fontSize: 16,
  },
});
export default CastItem;
