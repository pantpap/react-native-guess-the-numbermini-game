import {StyleSheet, Text, View} from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
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
  }
})

export default GameScreen;