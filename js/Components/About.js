import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

const styles = StyleSheet.create({
  //
});

const about = (
  <View>
    <Text>Purpose of this</Text>
  </View>
);

class T extends React.Component {
  state = { handle: false };

  click = async () => {
    // encodeURIComponent
    const can_click = await Linking.canOpenURL(
      'mailto:someone@example.com?subject=This%20is%20the%20subject&cc=someone_else@example.com&body=This%20is%20the%20body'
    );
    console.warn(can_click);
    this.setState({ handle: can_click });
  };

  render() {
    return (
      <View>
        <Text onPress={this.click}>Hi</Text>
        <Text>{this.state.handle ? 'CAN HANDLE' : 'I CAN NOT'}</Text>
      </View>
    );
  }
}

export default T;
