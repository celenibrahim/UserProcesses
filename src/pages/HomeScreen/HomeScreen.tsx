import {
  View,
  TextInput,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

import styles from "./HomeScreen.styles";

import Button from "../../components/Button";
import { Formik } from "formik";

const HomeScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={require("../../assets/background.png")}
          style={{ flex: 1 }}
          resizeMode="cover"
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          >
            <Formik
              initialValues={{ usercode: "", password: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <View style={{ margin: 10 }}>
                    <Text style={styles.label}>UserCode</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        placeholder="Usercode"
                        onChangeText={handleChange("usercode")}
                        onBlur={handleBlur("usercode")}
                        value={values.usercode}
                      />
                    </View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        placeholder="Password"
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry
                      />
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      title="Sign In"
                      onPress={handleSubmit}
                      styleBut={styles.formBut}
                      styleTxt={styles.formButTxt}
                    />
                    <Button
                      title="Sign Up"
                      onPress={() => console.log("Sign Up")}
                      styleBut={styles.formBut}
                      styleTxt={styles.formButTxt}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
