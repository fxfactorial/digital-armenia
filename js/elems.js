import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'green',
  },
});

export const { height, width } = Dimensions.get('window');

const padding_amount = 0.025;
export const padding_percent = `${padding_amount}%`;
export const padding = Math.floor(width * padding_amount);

export const Row = ({ children }) => <View style={styles.row}>{children}</View>;
