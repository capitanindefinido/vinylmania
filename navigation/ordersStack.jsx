import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Cart } from '../screens/cart'
import { ROUTE } from './routes'
import { Orders } from '../screens/orders'

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator()

export const OrdersStack = () => {
  return (
    <StackNavigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'Unbounded-Bold' },
        headerShadowVisible: false,
      }}
    >
      <StackScreen
        name={ROUTE.ORDERS}
        component={Orders}
        options={{
          headerTitle: 'Ordenes',
        }}
      />
    </StackNavigator>
  )
}
