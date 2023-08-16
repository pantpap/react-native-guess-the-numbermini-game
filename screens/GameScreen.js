import {StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import {useState} from "react";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return  randomNumber;
  }
}

const GameScreen = ({userInput}) => {
  const initialNumber = generateRandomNumber(1, 100, userInput)
  const [currentGuess, setCurrentGuess] = useState(initialNumber);
  return (
    <View style={styles.screen}>
      <Title>Players Choice</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
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