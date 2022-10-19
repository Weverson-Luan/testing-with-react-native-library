/* eslint-disable prettier/prettier */
/**
 * IMPORT
 */
import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

interface IProps {
  name: string;
  star: number;
  id?: string;
}
const StarRating = ({name, star}: IProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.image}
          source={{uri: 'https://capas-p.imagemfilmes.com.br/164947_000_p.jpg'}}
          resizeMode="cover"
        />
      </View>

      <View style={styles.wrapperText}>
        <Text style={styles.textTitle}>{name}</Text>
        <Text style={styles.textStar} testID="starIcon">
          ⭐ {star}
        </Text>
        <Text style={styles.textStar}>Type: Scripted</Text>
        <Text style={styles.textStatus}>Status: Enden (2017-01-20)</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#a159c4',
    borderRadius: 8,
    marginBottom: 10,
  },
  wrapperImage: {
    backgroundColor: '#fff',
    width: 150,
  },
  image: {
    height: 100,
    width: 150,
  },
  wrapperText: {
    marginLeft: 10,
  },
  textTitle: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  textStar: {
    color: '#ffff',
    fontSize: 14,
    fontWeight: '500',
  },
  textStatus: {
    color: '#ffff',
    fontSize: 12,
    fontWeight: '300',
  },
});

/**
 * EXPORTS
 */
export {StarRating};
