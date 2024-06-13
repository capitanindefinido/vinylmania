import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/welcome'
import { Home } from '../screens/home'
import { ItemListCategory } from '../screens/itemListCategory'
import { ItemDetail } from '../screens/itemDetail'
import { ROUTE } from './routes'
import { Logout } from '../icons/logout'

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator()

export const ShopStack = () => (
  <StackNavigator
    screenOptions={{
      headerTitleStyle: { fontFamily: 'Unbounded-Bold' },
      headerShadowVisible: false,
      headerRight: () => <Logout />,
    }}
  >
    <StackScreen
      name={ROUTE.HOME}
      component={Home}
      options={{
        headerTitle: 'Tienda',
        headerBackVisible: false,
      }}
    />
    <StackScreen
      name={ROUTE.ITEM_LIST_CATEGORIES}
      component={ItemListCategory}
      options={{
        headerShown: true,
      }}
    />
    <StackScreen name={ROUTE.ITEM_DETAIL} component={ItemDetail} />
  </StackNavigator>
)
