import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { CategoryItem } from './categoryItem'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useDispatch, useSelector } from 'react-redux'
import { setCategorySelected } from '../features/shop/shopSlice'
import { useGetCategoriesQuery } from '../services/shopService'
import { theme } from '../configs/theme'

export const Categories = () => {
  const { navigate } = useNavigation()
  const { data, isLoading, error } = useGetCategoriesQuery()
  const dispatch = useDispatch()

  const handlePress = brand => {
    dispatch(setCategorySelected(brand))
    navigate(ROUTE.ITEM_LIST_CATEGORIES, { brand })
  }

  return (
    <View style={styles.categories}>
      <Text style={styles.text}>Artistas</Text>
      {isLoading ? (
        <View style={styles.categoriesLoading}>
          <ActivityIndicator size='small' color={theme.colors.primary[600]} />
          <Text>Cargando artistas...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          horizontal
          renderItem={({ item }) => (
            <CategoryItem name={item} onPress={() => handlePress(item)} />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  categoriesLoading: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  categories: {
    gap: 16,
  },
  list: {
    gap: 12,
  },
  text: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 16,
  },
})
