
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator }from 'react-navigation-stack';
import { Account, Help, Home, Inbox, Orders } from '../../containers/pages';

const AccountStack = createStackNavigator(
  {
    Account: {
      screen: Account
    }
  },
  {
    initialRouteName: 'Account'
  }
)

const HelpStack = createStackNavigator(
  {
    Help: {
      screen: Help
    }
  },
  {
    initialRouteName: 'Help'
  }
)

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)

const OrderStack = createStackNavigator(
  {
    Orders: {
      screen: Orders
    }
  },
  {
    initialRouteName: 'Orders'
  }
)

const InboxStack = createStackNavigator(
  {
    Inbox: {
      screen: Inbox
    }
  },
  {
    initialRouteName: 'Inbox'
  }
)

const Router = createSwitchNavigator(
  {
    HomeStack: {
      screen: HomeStack
    },
    OrderStack: {
      screen: OrderStack
    },
    HelpStack: {
      screen: HelpStack
    },
    InboxStack: {
      screen: InboxStack
    },
    AccountStack: {
      screen: AccountStack
    }
  }, 
  {
    initialRouteName: 'HomeStack'
  }
);

export default createAppContainer(Router);