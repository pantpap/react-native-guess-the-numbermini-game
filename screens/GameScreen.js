import {Alert, StyleSheet, Text, View, FlatList} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

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
  const [guessRounds, setGuessRounds] = useState([initialNumber])

  useEffect(() => {
    if(currentGuess === userInput){
      onGameOver();
    }
  }, [currentGuess, userInput, onGameOver]);

  // reset boundaries to initial values
  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

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

    const newRndNumber = generateRandomNumber(min, max, currentGuess)
    setCurrentGuess( newRndNumber );
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
  }

  const guessRoundListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Players Choice</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handlePress('plus')}>
              <Ionicons name={'md-add'} size={24} color={'white'}/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handlePress('minus')}>
              <Ionicons name={'md-remove'} size={24} color={'white'}/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData)=> <GuessLogItem roundNumber={4}guess={itemData.item}/>}
          keyExtractor={(item)=>item}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})

export default GameScreen;