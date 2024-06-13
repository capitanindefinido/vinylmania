import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { ROUTE } from '../navigation/routes'
import { theme } from '../configs/theme'

export const MyProfile = () => {
  const { navigate } = useNavigation()
  const { email, photo } = useSelector(state => state.auth.value.user)

  const goToImageSelector = () => navigate(ROUTE.IMAGE_SELECTOR)

  const goToMyLocation = () => navigate(ROUTE.MY_LOCATION)

  return (
    <View style={styles.myProfile}>
      <Text>{email}</Text>
      <Image
        source={
          photo
            ? { uri: photo }
            : require('../assets/myProfile/profile_placeholder.png')
        }
        resizeMode='cover'
        style={styles.image}
      />
      <Button onPress={goToImageSelector}>Agregar foto de perfil</Button>
      <Button onPress={goToMyLocation}>Mi dirección</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  myProfile: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
    gap: 32,
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
})
