import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import { padding } from './elems';
import PitchColumn from './Components/PitchColumn';

const styles = StyleSheet.create({
  padLeft: { paddingLeft: padding },
  padRight: { paddingRight: padding },
  centered_scroll_content: { alignItems: 'center' },
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

const DigitalArmeniaBanner = <Text>Digital Armenia</Text>;

class DigitalArmenia extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: header_left(navigation),
    title: DigitalArmeniaBanner,
    headerRight: header_right(navigation),
  });

  render() {
    return (
      <ScrollView>
        <View style={styles.centered_scroll_content}>
          <PitchColumn />
        </View>
      </ScrollView>
    );
  }
}

const custom_drawer_component = ({ navigation: { navigate } }) => {
  return null;
};

const home = DrawerNavigator({
  root: { screen: DigitalArmenia },
});

export default home;
