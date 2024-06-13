import { ShopStack } from './shopStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CartStack } from './cartStack'
import { Cart } from '../icons/cart'
import { Storefront } from '../icons/storefront'
import { OrdersStack } from './ordersStack'
import { MyProfileStack } from './myProfileStack'
import { Orders } from '../icons/orders'
import { Person } from '../icons/person'

const { Screen, Navigator } = createBottomTabNavigator()

export const TabNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#FC3400',
      tabBarInactiveTintColor: '#9ca3af',
    }}
  >
    <Screen
      name='ShopTab'
      component={ShopStack}
      options={{
        title: 'Tienda',
        tabBarIcon: ({ color }) => <Storefront color={color} />,
      }}
    />
    <Screen
      name='CartTab'
      component={CartStack}
      options={{
        title: 'Carrito',
        tabBarIcon: ({ color }) => <Cart color={color} />,
      }}
    />
    <Screen
      name='OrdersTab'
      component={OrdersStack}
      options={{
        title: 'Ordenes',
        tabBarIcon: ({ color }) => <Orders color={color} />,
      }}
    />
    <Screen
      name='ProfileTab'
      component={MyProfileStack}
      options={{
        title: 'Perfil',
        tabBarIcon: ({ color }) => <Person color={color} />,
      }}
    />
  </Navigator>
)
