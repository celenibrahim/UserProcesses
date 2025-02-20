import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
  styleBut: object;
  styleTxt: object;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  styleBut,
  styleTxt,
}) => {
  return (
    <View>
      <TouchableOpacity style={styleBut} onPress={onPress}>
        <Text style={styleTxt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
