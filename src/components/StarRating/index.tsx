/* eslint-disable prettier/prettier */
/**
 * IMPORT
 */
import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

interface IProps {
  name: string;
  image: string;
  star: number;
  id?: string;
  onEdit?: () => void;
}
const StarRating = ({name, star, image, onEdit}: IProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image style={styles.image} source={{uri: image}} resizeMode="cover" />
      </View>

      <View style={styles.wrapperText}>
        <Text style={styles.textTitle}>{name}</Text>
        <Text style={styles.textStar} testID="starIcon">
          ⭐ {star}
        </Text>
        <Text style={styles.textStar}>Type: Scripted</Text>
        <Text style={styles.textStatus}>Status: Enden (2017-01-20)</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={onEdit}>
          <Text style={styles.textButton}>Editar</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    backgroundColor: '#a159c4',
    borderRadius: 8,
    marginBottom: 10,
    paddingRight: 8,
  },
  wrapperImage: {
    backgroundColor: '#fff',
    width: 150,
  },
  image: {
    height: 100,
    width: 150,
  },
  wrapperText: {},
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
  button: {
    backgroundColor: 'blue',
    width: 60,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  textButton: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

/**
 * EXPORTS
 */
export {StarRating};
