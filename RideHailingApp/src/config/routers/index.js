
import { createAppContainer } from 'react-navigation';
import { createStackNavigator }from 'react-navigation-stack';
import { Home, Account } from '../../containers/pages';

const Router = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        headerTitle: 'My Account'
      }
    }
  }, 
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(Router);