import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import React, { useState } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import AddUser from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Router";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../assets/login.png")}
      resizeMode="cover"
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title} variant="displayLarge">
          Welcome
        </Text>
        <Text style={styles.text} variant="titleMedium">
          This is a Authentication and{"\n"}Authorization test app.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          mode="flat"
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Type Email"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          mode="flat"
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Type Password"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("Home")}
          labelStyle={{ color: "purple", fontSize: 20 }}
          contentStyle={styles.buttonContent}
          buttonColor="transparent"
          style={styles.buttonStyle}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </Button>

        <Button
          mode="outlined"
          onPress={() => null}
          labelStyle={{ color: "purple", fontSize: 20 }}
          contentStyle={styles.buttonContent}
          buttonColor="transparent"
          style={styles.buttonStyle}
        >
          <View style={styles.buttonTextContainer}>
            <AddUser size={20} name="adduser" style={styles.icon} />
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </Button>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Dimensions.get("screen").height / 22,
  },
  inputContainer: {
    marginBottom: 15,
  },
  textInput: {
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: "auto",
    flexDirection: "column", // Buttons will be aligned vertically
    gap: 10, // Adds space between buttons
  },
  buttonContent: {
    flexDirection: "row", // Align icon and text horizontally
    justifyContent: "center", // Center them horizontally
    alignItems: "center", // Vertically align them
  },
  buttonTextContainer: {
    flexDirection: "row", // Ensure icon and text are in the same row
    alignItems: "center",
  },
  icon: {
    marginRight: 10, // Space between the icon and text
    color: "white",
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  buttonStyle: {
    borderColor: "white",
    borderWidth: 1,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  text: {
    color: "white",
    fontStyle: "italic",
  },
  titleContainer: {
    margin: 20,
  },
});
