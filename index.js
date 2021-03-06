/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import Login from './src/pages/Login';
import Feed from './src/pages/Feed';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Login);
AppRegistry.registerComponent(Feed, () => Feed);

import {createStackNavigator} from 'react-navigation';

const App = createStackNavigator({
  Login: {screen: Login},
  Feed: {screen: Feed},
});

export default App;