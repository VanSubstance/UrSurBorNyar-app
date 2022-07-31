/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/containers/App';
import {name as appName} from './app.json';
import Config from 'react-native-config';

console.log("App initiated:: ");
console.log("Connected Url:: ", Config.CLIENT_URL);

AppRegistry.registerComponent(appName, () => App);
