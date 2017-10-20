import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export const { height, width } = Dimensions.get('window');

export const padding = Math.floor(width * 0.025);

export const Row = ({ children }) => <View style={styles.row}>{children}</View>;
