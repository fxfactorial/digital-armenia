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
import { Font } from 'expo';

import store from './store';
import { padding } from './elems';
import PitchColumn from './Components/PitchColumn';
import About from './Components/About';
import Credits from './Components/Credits';
import TopContributors from './Components/TopContributors';

const styles = StyleSheet.create({
  centered_scroll_content: { alignItems: 'center' },
});

class DigitalArmenia extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      poppins: require('digital-armenia/assets/fonts/Poppins-Light.ttf'),
    });
    store.font_loaded = true;
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'purple' }}>
        <View style={styles.centered_scroll_content}>
          <PitchColumn />
        </View>
      </ScrollView>
    );
  }
}

const custom_drawer_component = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

const home = DrawerNavigator(
  {
    home: { screen: DigitalArmenia },
    about: { screen: About },
  },
  {
    // contentComponent: custom_drawer_component,
  }
);

export default home;
