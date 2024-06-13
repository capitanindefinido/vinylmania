import { Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../configs/theme'

export const CategoryItem = ({ name, onPress }) => (
  <Pressable style={styles.category} onPress={onPress}>
    <Text style={styles.name}>{name}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    backgroundColor: theme.colors.black,
    borderRadius: 32,
    height: 70,
    justifyContent: 'center',
    width: 70,
  },
  name: {
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})
