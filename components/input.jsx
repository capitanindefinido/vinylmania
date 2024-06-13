import { StyleSheet, Text, TextInput, View } from 'react-native'

export const Input = ({ error, label, ...props }) => (
  <View style={styles.input}>
    <Text>{label}</Text>
    <TextInput {...props} style={styles.box} />
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
)

const styles = StyleSheet.create({
  input: {
    gap: 4,
    width: '100%',
  },
  box: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 2,
  },
})
