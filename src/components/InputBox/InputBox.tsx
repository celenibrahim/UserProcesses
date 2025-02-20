import { Text, View, TextInput } from "react-native";
import React from "react";
import styles from "./InputBox.styles";
interface InputBoxProps {
  label: string;
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  placeholder,
  value,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default InputBox;
