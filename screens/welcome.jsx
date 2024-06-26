import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/button'
import { theme } from '../configs/theme'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'

export const Welcome = () => {
  const { navigate } = useNavigation()

  const handlePress = () => navigate(ROUTE.HOME)

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image/>
      <View style={styles.texts}>
        <Text style={styles.title}>VitrolaMania</Text>
        <Text style={styles.text}>Música para tus oídos</Text>
      </View>
      <Button onPress={handlePress}>Ingresar</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
    gap: 32,
    justifyContent: 'center',
    padding: 16,
  },
  texts: {
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  text: {
    color: theme.colors.gray[500],
    fontSize: 16,
  },
})
