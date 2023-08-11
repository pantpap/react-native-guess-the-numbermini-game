import {StyleSheet, Text} from "react-native";
import Colors from "../constanst/colors";

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryYellow,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.primaryYellow,
    padding: 12
  }
})