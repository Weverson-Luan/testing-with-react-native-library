/* eslint-disable prettier/prettier */
/**
 * IMPORT
 */
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator color={'red'} size={36} />
    </View>
  );
};

/**
 * EXPORTS
 */
export {Loading};
