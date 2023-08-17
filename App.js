import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from './screens/GameScreen'
import Colors from "./constanst/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userInput, setUserInput] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  const userInputHandler = (inputNumber) => {
    setUserInput(inputNumber);
  }

  const gameOverHandler = () => {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onConfirmInput={userInputHandler}/>

  if(userInput){
    screen = <GameScreen userInput={userInput} onGameOver={gameOverHandler} />
  }

  if(gameIsOver){
    screen = <GameOverScreen/>
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
