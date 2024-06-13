import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './tabNavigator'
import { AuthStack } from './authStack'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  useGetUserLocationQuery,
  useGetProfileImageQuery,
} from '../services/shopService'
import {
  setUserPhoto,
  setUser,
  setUserLocation,
} from '../features/auth/authSlice'
import { fetchSession } from '../db'

export const MainNavigator = () => {
  const { localId } = useSelector(state => state.auth.value.user)
  const { data: profileImage } = useGetProfileImageQuery(localId)
  const { data: userLocation } = useGetUserLocationQuery(localId)

  const dispatch = useDispatch()

  useEffect(() => {
    const getSession = async () => {
      const session = await fetchSession()
      if (session) dispatch(setUser(session))
    }
    getSession()
  }, [])

  useEffect(() => {
    if (profileImage) {
      dispatch(setUserPhoto(profileImage.image))
    }
  }, [profileImage])

  useEffect(() => {
    if (userLocation) {
      dispatch(setUserLocation(userLocation))
    }
  }, [userLocation])

  return (
    <NavigationContainer>
      {localId ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}
