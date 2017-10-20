import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { Svg } from 'expo';

import { padding_percent, Row, StyledText } from '../elems';

const styles = StyleSheet.create({
  centered: { alignItems: 'center' },
  banner: {
    fontSize: 32,
    textAlign: 'center',
    padding: padding_percent,
  },
});

const store = new function() {
  extendObservable(this, {
    action_modal: { show: false },
  });
}();

const engage = (
  <View style={{ backgroundColor: 'red' }}>
    <Text style={styles.banner}>Engage with Armenia</Text>
    <Text>
      Something more Something more Something more Something more Something more
      Something more Something more Something more Something more Something more
    </Text>
  </View>
);

const TakeAction = observer(() => {
  return (
    <View style={[styles.centered, { backgroundColor: 'orange' }]}>
      <StyledText content={'Take Action'} style={[styles.banner]} />
      <Text>Send a request for online recognition to</Text>
      <Row>
        <Text>Select Category</Text>
        <Text>End</Text>
      </Row>
    </View>
  );
});

const DirectiveBlock = () => {
  return (
    <View>
      <Text>Get Involved</Text>
      <Text>Send Request</Text>
      <Text>Report Success</Text>
    </View>
  );
};

const ResultCircle = ({ cx, cy }) => {
  return (
    <Svg.Circle
      cx={cx}
      cy={cy}
      r={45}
      strokeWidth={2.5}
      stroke="#e74c3c"
      fill="#f1c40f">
      <Svg.Text fontSize="20" stroke="purple" fontWeight="bold" x={50} y={50}>
        Hello
      </Svg.Text>
    </Svg.Circle>
  );
};

const ResultsBlock = () => {
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>Results</Text>
      <Svg style={{ backgroundColor: 'red' }} height={100} width={100}>
        <ResultCircle cx={50} cy={50} />
        <ResultCircle cx={70} cy={80} />
      </Svg>
    </View>
  );
};

export default observer(() => {
  return (
    <View style={{ flex: 1 }}>
      {engage}
      <TakeAction />
      <DirectiveBlock />
      <ResultsBlock />
    </View>
  );
});
