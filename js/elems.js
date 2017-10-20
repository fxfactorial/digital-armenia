import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { observer } from 'mobx-react';

import store from './store';

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

export const StyledText = observer(({ content, style = [], ...rest }) => (
  <Text
    style={[...style, { fontFamily: store.font_loaded ? 'poppins' : 'Arial' }]}
    {...rest}>
    {content}
  </Text>
));
