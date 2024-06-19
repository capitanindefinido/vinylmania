import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native'
import { CategoryItem } from './categoryItem'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shop/shopSlice'
import { useGetCategoriesQuery } from '../services/shopService'
import { theme } from '../configs/theme'

export const Categories = () => {
  const { navigate } = useNavigation()
  const { data, isLoading, error } = useGetCategoriesQuery()
  const dispatch = useDispatch()

  const handlePress = (brand) => {
    dispatch(setCategorySelected(brand))
    navigate(ROUTE.ITEM_LIST_CATEGORIES, { brand })
  }

  return (
    <ImageBackground 
      source={require('../assets/home/vinilmania.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Artistas</Text>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color={theme.colors.primary[600]} />
            <Text style={styles.loadingText}>Cargando artistas...</Text>
          </View>
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <CategoryItem name={item} onPress={() => handlePress(item)} />
            )}
            keyExtractor={(item) => item}
          />
        )}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 20,
  },
  title: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 32,
    color: theme.colors.primary[100],
    textAlign: 'center',
    marginBottom: 20,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginLeft: 10,
    color: theme.colors.primary[100],
  },
  list: {
    flexGrow: 0,
    paddingVertical: 10,
    gap: 20,
  },
})
