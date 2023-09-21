import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from './screens/GameScreen'
import Colors from "./constanst/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";

export default function App() {
  const [userInput, setUserInput] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  const userInputHandler = (inputNumber) => {
    setUserInput(inputNumber);
  }

  const gameOverHandler = (numberOfRounds) => { 
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  const starNewGameHandler = () => {
    setUserInput(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onConfirmInput={userInputHandler}/>

  if(userInput){
    screen = <GameScreen userInput={userInput} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userInput){
    screen = <GameOverScreen userNumber={userInput} roundNumber={guessRounds} onStartNewGame={starNewGameHandler}/>
  }
  return (
    <LinearGradient colors={[Colors.primary700 ,Colors.primaryYellow]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
