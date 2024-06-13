import { Alert, StyleSheet, Text, View } from 'react-native'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useLoginMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { insertSession } from '../db'

export const Login = () => {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const [triggerLogin, result] = useLoginMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setIsLoading(true)
      await triggerLogin({ email, password })
    } catch (error) {
      console.error('Error en la solicitud de ingreso:', error)
      Alert.alert('Error', 'Correo o contraseña incorrectos')
    } finally {
      setIsLoading(false)
    }
  }

  const goToSignUp = () => navigate(ROUTE.SIGN_UP)

  useEffect(() => {
    if (result.data) {
      const { email, localId, idToken: token } = result.data
      console.log('token =>', token)

      dispatch(setUser({ email, localId, token }))
      insertSession({ email, localId, token })
    }
  }, [result.data])

  return (
    <View style={styles.login}>
      <View style={styles.section}>
        <Input
          label='Correo electronico'
          placeholder='francisco@shoooes.com'
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label='Contraseña'
          placeholder='******'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={handleLogin}>
          {isLoading ? 'Ingresando...' : 'Ingresar'}
        </Button>
      </View>
      <View style={styles.section}>
        <Text>Aun no tienes cuenta?</Text>
        <Button onPress={goToSignUp}>Registrate</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  section: {
    width: '100%',
    gap: 16,
  },
})
