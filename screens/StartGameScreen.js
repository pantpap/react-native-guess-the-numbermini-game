import {useState} from "react";
import {TextInput, View, StyleSheet, Alert, Text} from 'react-native'
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constanst/colors";
import Title from "../components/ui/Title";

const StartGameScreen = ({onConfirmInput}) => {

  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  }

  const resetHandler = () => {
    setEnteredValue('')
  }

  const confirmHandler = () => {
    const userInput = parseInt(enteredValue);

    if(isNaN(userInput) || userInput < 1 || userInput > 99){
      Alert.alert('Error', 'Something went wrong', [{text: 'Close', style: 'cancel', onPress: resetHandler}] )
      return;
    }
    onConfirmInput(userInput);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess the Number</Title>
      <View style={styles.container}>
        <Text style={styles.title}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize='none'
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // add shadow to the element. Works only for android
    padding: 16,
    backgroundColor: Colors.primary800,
    // Adding shadow for IOS devices
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  title: {
    color: Colors.primaryYellow,
    fontSize: 24
  },
  input: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.primaryYellow,
    borderBottomWidth: 2,
    color: Colors.primaryYellow,
    marginVertical: 8,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex : 1
  }
})

export default StartGameScreen;