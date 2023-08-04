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
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // add shadow to the element. Works only for android
    padding: 16,
    backgroundColor: '#72063c',
    // Adding shadow for IOS devices
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
})

export default StartGameScreen;