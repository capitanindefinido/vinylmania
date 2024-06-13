import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { ProductItem } from '../components/productItem'
import { SearchInput } from '../components/searchInput'
import { useEffect, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'
import { theme } from '../configs/theme'

export const ItemListCategory = () => {
  const { navigate, setOptions } = useNavigation()
  const [textToSearch, setTextToSearch] = useState('')
  const category = useSelector(state => state.shop.categorySeleted)
  const { data: products, isLoading } = useGetProductsByCategoryQuery(category)
  const [productsFiltered, setProductsFiltered] = useState(products)

  const navigateToItemDetails = productId =>
    navigate(ROUTE.ITEM_DETAIL, { productId })

  const capitalizeBrand = brandToCapitalize => {
    const [firstLetter, ...restLetters] = brandToCapitalize
    const brand = firstLetter.toUpperCase() + restLetters.join('')
    return brand
  }

  const handleSearch = textToSearch => {
    setTextToSearch(textToSearch)
    const productsFiltered = products.filter(product =>
      product.model.toLowerCase().includes(textToSearch.toLowerCase().trim())
    )
    setProductsFiltered(productsFiltered)
  }

  useEffect(() => setProductsFiltered(products), [products])

  useFocusEffect(() => {
    setOptions({ title: capitalizeBrand(category) })
  })

  if (isLoading) {
    return (
      <View style={styles.itemListCategories}>
        <ActivityIndicator size='large' color={theme.colors.primary[600]} />
        <Text>Cargando productos...</Text>
      </View>
    )
  }
  return (
    <View style={styles.itemListCategories}>
      <SearchInput
        onChangeText={handleSearch}
        placeholder='Buscar zapatillas aquí...'
        value={textToSearch}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={productsFiltered}
        key={item => item.id}
        renderItem={({ item }) => (
          <ProductItem
            {...item}
            onPress={() => navigateToItemDetails(item.id)}
          />
        )}
      />
      {productsFiltered && productsFiltered.length === 0 ? (
        <Text>
          No se han encontrado zapatillas con la búsqueda "{textToSearch}"
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  brand: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  itemListCategories: {
    gap: 32,
    padding: 16,
    backgroundColor: 'white',
  },
  list: { gap: 32 },
})
