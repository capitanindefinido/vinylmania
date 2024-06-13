import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE } from './routes'
import { MyProfile } from '../screens/myProfile'
import { ImageSelector } from '../screens/imageSelector'
import { LocationSelector } from '../screens/locationSelector'
import { ListAddress } from '../screens/listAddress'

const { Navigator, Screen } = createNativeStackNavigator()

export const MyProfileStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'Unbounded-Bold' },
        headerShadowVisible: false,
      }}
    >
      <Screen
        name={ROUTE.MY_PROFILE}
        component={MyProfile}
        options={{ headerTitle: 'Perfil' }}
      />
      <Screen
        name={ROUTE.IMAGE_SELECTOR}
        component={ImageSelector}
        options={{ headerTitle: 'Seleccionar imagen' }}
      />
      <Screen
        name={ROUTE.MY_LOCATION}
        component={ListAddress}
        options={{ headerTitle: 'Mi ubicación' }}
      />
      <Screen
        name={ROUTE.LOCATION_SELECTOR}
        component={LocationSelector}
        options={{ headerTitle: 'Seleccionar ubicación' }}
      />
    </Navigator>
  )
}
