import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import { theme } from '../configs/theme'
import { formatPrice } from '../utils/price'

export const ProductItem = ({ brand, image, model, onPress, price }) => (
  <Pressable style={styles.productItem} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.image} resizeMode='contain' />
    <View style={styles.info}>
      <Text style={styles.title}>{brand}</Text>
      <Text style={styles.text}>{model}</Text>
      <Text style={styles.text}>{formatPrice(price)}</Text>
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  productItem: {
    borderRadius: 16,
  },
  image: {
    height: 160,
    backgroundColor: theme.colors.white,
  },
  info: {
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 14,
  },
})
