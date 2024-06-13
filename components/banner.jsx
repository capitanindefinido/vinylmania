import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export const Banner = () => (
  <ImageBackground
    source={require('../assets/home/vinilmania.png')}
    resizeMode='cover'
    style={{ borderRadius: 16, overflow: 'hidden' }}
  >
    <View style={styles.banner}>
      <Text style={styles.text}>Discos, Cassettes y Vinilos para Maniacos</Text>
    </View>
  </ImageBackground>
)

const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
    width: '100%',
  },
  text: {
    color: 'yellow',
    fontFamily: 'Unbounded-Bold',
    fontSize: 24,
  },
})
