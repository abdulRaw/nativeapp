import React, { useRef } from 'react';
import { Animated, AppRegistry, Button } from 'react-native';
import Main from './src/Main';

export default function App()
{

  return (
    <>
      <Main />
    </>
  );
}

AppRegistry.registerComponent('Appname', () => App);