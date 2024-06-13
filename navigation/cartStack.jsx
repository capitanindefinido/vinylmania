import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Cart } from '../screens/cart'
import { ROUTE } from './routes'

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator()

export const CartStack = () => {
  return (
    <StackNavigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'Unbounded-Bold' },
        headerShadowVisible: false,
      }}
    >
      <StackScreen
        name={ROUTE.CART}
        component={Cart}
        options={{
          headerTitle: 'Carrito',
        }}
      />
    </StackNavigator>
  )
}
