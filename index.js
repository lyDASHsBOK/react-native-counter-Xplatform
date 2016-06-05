import React, { AppRegistry } from 'react-native';
import App from './app/containers/app';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
});
