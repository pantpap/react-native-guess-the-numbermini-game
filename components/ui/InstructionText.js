import {Text, StyleSheet} from "react-native";
import Colors from "../../constanst/colors";

const InstructionText = ({children, style}) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.primaryYellow,
    fontSize: 24
  },
})

export default InstructionText;