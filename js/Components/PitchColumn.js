import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  centered: { alignItems: 'center' },
  engage_banner: { fontSize: 32 },
});

const engage = [
  <Text style={styles.engage_banner} key={1}>
    Engage with Armenia
  </Text>,
  <Text key={2}>
    Something more Something more Something more Something more Something more
    Something more Something more Something more Something more Something more
  </Text>,
];

export default () => {
  return <View>{engage}</View>;
};
