import Svg, { Path } from 'react-native-svg'
import { theme } from '../configs/theme'
import { useDispatch } from 'react-redux'
import { Pressable } from 'react-native'
import { logout } from '../features/auth/authSlice'
import { deleteSession } from '../db'

export const Logout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    deleteSession()
  }

  return (
    <Pressable onPress={handleLogout}>
      <Svg width={24} height={24} fill='none'>
        <Path
          fill={theme.colors.black}
          d='M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h7v2H5v14h7v2H5Zm11-4-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5-5 5Z'
        />
      </Svg>
    </Pressable>
  )
}
