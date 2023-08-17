import {Text, StyleSheet} from "react-native";
import Colors from "../../constanst/colors";

const InstructionText = ({children}) => {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primaryYellow,
    fontSize: 24
  },
})

export default InstructionText;