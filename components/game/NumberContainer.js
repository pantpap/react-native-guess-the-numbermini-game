import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constanst/colors";

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primaryYellow,
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.primaryYellow,
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }

})

export default NumberContainer;