import { SafeAreaView } from 'react-native-safe-area-context'
import { Categories } from '../components/categories'
import { StyleSheet } from 'react-native'
import { Banner } from '../components/banner'

export const Home = () => {
  return (
    <SafeAreaView style={styles.home}>
      <Banner />
      <Categories />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    gap: 32,
    backgroundColor: 'white',
  },
})
