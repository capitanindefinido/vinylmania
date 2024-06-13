import { StyleSheet, Text, View } from 'react-native'
import { Diamond } from '../icons/diamond'

export const Header = () => (
  <View style={styles.header}>
    <Diamond />
    <Text style={styles.text}>Shoooes</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 18,
  },
})
