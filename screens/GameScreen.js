import {Alert, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return  randomNumber;
  }
}

let min = 1;
let max = 100

const GameScreen = ({userInput, onGameOver}) => {
  const initialNumber = generateRandomNumber(1, 100, userInput)
  const [currentGuess, setCurrentGuess] = useState(initialNumber);

  useEffect(() => {
    if(currentGuess === userInput){
      onGameOver();
    }
  }, [currentGuess, userInput, onGameOver]);

  const handlePress = (operator) => {
    if((operator === 'minus' && currentGuess < userInput) || (operator === 'plus' && currentGuess > userInput)){
      Alert.alert('You MUST play fair',
        'You know that you are cheating...',
        [{text: 'try again', style: 'cancel'}])
    }
    if(operator === 'minus'){
      max = currentGuess
    } else {
      min = currentGuess;
    }
    setCurrentGuess( generateRandomNumber(min, max, currentGuess))
  }

  return (
    <View style={styles.screen}>
      <Title>Players Choice</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => handlePress('plus')}>+</PrimaryButton>
          <PrimaryButton onPress={() => handlePress('minus')}>-</PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
})

export default GameScreen;