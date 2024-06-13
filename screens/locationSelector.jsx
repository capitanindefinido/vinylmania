import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../configs/theme'
import * as Location from 'expo-location'
import { MapPreview } from '../components/mapPreview'
import { googleAPI } from '../configs/googleAPI'
import { usePostUserLocationMutation } from '../services/shopService'
import { Button } from '../components/button'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLocation } from '../features/auth/authSlice'
import { useNavigation } from '@react-navigation/native'

export const LocationSelector = () => {
  const [address, setAddress] = useState('')
  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [error, setError] = useState('')
  const hasLocation = location.latitude && location.longitude
  const [triggerPostUserLocation] = usePostUserLocationMutation()
  const localId = useSelector(state => state.auth.value.user.localId)
  const dispatch = useDispatch()
  const { goBack } = useNavigation()
  const [isSavingLocation, setIsSavingLocation] = useState(false)

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permisos insuficientes')
        return
      }
      const location = await Location.getCurrentPositionAsync()
      setLocation(location.coords)
    } catch (error) {
      setError(error.message)
    }
  }

  const getAdress = async () => {
    console.log('getAdress')
    try {
      const reverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.geocoding}`
      const response = await fetch(reverseGeocode)
      const data = await response.json()
      setAddress(data.results[0].formatted_address)
    } catch (error) {
      setError(error.message)
    }
  }

  const confirmAdress = async () => {
    try {
      setIsSavingLocation(true)
      const locationFormatted = {
        address,
        latitude: location.latitude,
        longitude: location.longitude,
      }
      await triggerPostUserLocation({ location: locationFormatted, localId })
      dispatch(setUserLocation(locationFormatted))
      goBack()
    } catch (error) {
      setError(error.message)
    } finally {
      setIsSavingLocation(false)
    }
  }

  useEffect(() => {
    if (hasLocation) getAdress()
  }, [location])

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <View style={styles.locationSelector}>
      {hasLocation ? (
        <>
          <Text style={styles.title}>Mi ubicación</Text>
          <Text
            style={styles.text}
          >{`Latitud: ${location.latitude}, Longitud: ${location.longitude}`}</Text>
          {address ? <Text style={styles.text}>{address}</Text> : null}
          <MapPreview location={location} />
          <Button onPress={confirmAdress}>
            {isSavingLocation ? 'Confirmando...' : 'Confirmar ubicación'}
          </Button>
        </>
      ) : (
        <>
          <Text style={styles.title}>Error al obtener ubicación</Text>
          <Text style={styles.text}>{error}</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  locationSelector: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flex: 1,
    gap: 32,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 24,
  },
  text: {
    color: theme.colors.gray[500],
  },
})
