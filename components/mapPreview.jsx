import { Image, StyleSheet, View } from 'react-native'
import { googleAPI } from '../configs/googleAPI'

export const MapPreview = ({ location }) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:red%7Clabel:A%${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`

  return (
    <View style={styles.mapPreview}>
      <Image style={styles.image} source={{ uri: mapPreviewUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  mapPreview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
})
