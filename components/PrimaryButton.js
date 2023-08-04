import { View, Text, Pressable } from 'react-native';

const PrimaryButton = (props) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  )
}

export default PrimaryButton;