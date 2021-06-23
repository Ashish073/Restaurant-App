import { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';


const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Signup: SignupScreen,
    Home: HomeScreen,
    Detail: DetailsScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: ""
    }
  }
)

export default createAppContainer(navigator);