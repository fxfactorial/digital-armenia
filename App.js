import React from 'react';
import { StackNavigator } from 'react-navigation';

import home_screen from './js/home';

const root_navigator = StackNavigator({
  root: { screen: home_screen },
});

export default root_navigator;
