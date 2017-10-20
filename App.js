import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import home_screen from './js/home';
import { padding } from './js/elems';

const DigitalArmeniaBanner = <Text>Digital Armenia</Text>;

const styles = StyleSheet.create({
  padLeft: { paddingLeft: padding },
  padRight: { paddingRight: padding },
});

const header_left = navigation => (
  <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
    <View style={[styles.padLeft]}>
      <Ionicons name={'md-menu'} size={32} />
    </View>
  </TouchableOpacity>
);

const header_right = navigation => (
  <TouchableOpacity style={[styles.padRight]}>
    <Ionicons name={'ios-options'} size={32} />
  </TouchableOpacity>
);

const navigationOptions = ({ navigation }) => ({
  headerLeft: header_left(navigation),
  title: DigitalArmeniaBanner,
  headerRight: header_right(navigation),
});

const root_navigator = StackNavigator(
  {
    root: { screen: home_screen, navigationOptions },
  },
  {}
);

export default root_navigator;
