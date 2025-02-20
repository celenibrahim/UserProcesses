import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo_container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginTop: Dimensions.get("screen").height / 10,
    marginBottom: Dimensions.get("screen").height / 10,
    width: Dimensions.get("screen").width / 1.7,
    height: Dimensions.get("screen").height / 3.7,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 3,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  label: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "bold",
  },
  formBut: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  formButTxt: {
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
  },
  buttonContainer: {
    gap: 10,
  },
});
