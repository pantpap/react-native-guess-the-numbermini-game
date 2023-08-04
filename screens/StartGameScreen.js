import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 16,
    backgroundColor: '#72063c'
  }
})

export default StartGameScreen;