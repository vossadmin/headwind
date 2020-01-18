import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Alert
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import values from "../config";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
export default class InputScreen extends Component {
  state = {
    yardage: 0,
    elevation: 0,
    wind: 0,
    d2: 0
  };
  handler = (name, value) => {
    this.setState({
      [name]: Number(value)
    });
  };
  calculate = () => {
    if (
      this.state.wind == 0 ||
      this.state.elevation == 0 ||
      this.state.yardage == 0
    ) {
      Alert.alert(
        "Incomplete Input",
        "Please fill all input fields in order to get the resulting data"
      );
    }
    // else if (this.state.elevation || this.state.wind || this.state.yardage) {
    //   Alert.alert(
    //     "Invalid Input",
    //     "All the input fields should have numbers as input. Any other format would not be accepted."
    //   );
    // }
    else {
      const d2 = this.calculated2();
      const headwind6 = this.calculateHeadwind(values.b6, d2);
      const headwind7 = this.calculateHeadwind(values.b7, d2);
      const headwind8 = this.calculateHeadwind(values.b8, d2);
      const headwind9 = this.calculateHeadwind(values.b9, d2);
      const headwind10 = this.calculateHeadwind(values.b10, d2);
      const headwind11 = this.calculateHeadwind(values.b11, d2);
      const headwind12 = this.calculateHeadwind(values.b12, d2);
      const tailwind6 = this.calculateTailwind(values.b6, d2);
      const tailwind7 = this.calculateTailwind(values.b7, d2);
      const tailwind8 = this.calculateTailwind(values.b8, d2);
      const tailwind9 = this.calculateTailwind(values.b9, d2);
      const tailwind10 = this.calculateTailwind(values.b10, d2);
      const tailwind11 = this.calculateTailwind(values.b11, d2);
      const tailwind12 = this.calculateTailwind(values.b12, d2);
      this.props.setValues({
        headwind6,
        headwind7,
        headwind8,
        headwind9,
        headwind10,
        headwind11,
        headwind12,
        tailwind6,
        tailwind7,
        tailwind8,
        tailwind9,
        tailwind10,
        tailwind11,
        tailwind12
      });
    }
  };
  calculateHeadwind = (b, d2) => {
    return d2 + (d2 / 180) * this.state.wind * b;
  };
  calculateTailwind = (b, d2) => {
    return d2 - (d2 / 260) * this.state.wind * b;
  };
  calculated2 = () => {
    if (this.state.elevation > 0) {
      return (
        this.state.yardage +
        (this.state.elevation / 2 -
          ((this.state.elevation / this.state.yardage) * this.state.elevation) /
            2)
      );
    } else {
      return this.state.yardage - (this.state.elevation * -1) / 4;
    }
  };
  render() {
    return (
      <ImageBackground
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
        source={require("../../assets/bg.jpg")}
      >
        <StatusBar hidden></StatusBar>
        <View
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: "rgba(54, 16, 47,0.8)",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderRadius: 3,
              borderColor: "#ffffff",
              borderWidth: 1,
              width: "75%",
              alignItems: "center",
              padding: 10,
              marginBottom: 20
            }}
          >
            <TextInput
              style={{
                color: "#ffffff",
                flex: 1
              }}
              onChangeText={text => this.handler("yardage", text)}
              keyboardType="numeric"
              placeholder="Enter the Yardage"
            ></TextInput>

            <MaterialCommunityIcons
              name="map-marker-distance"
              color="#ffffff"
              size={20}
              style={{
                marginRight: 3
              }}
            ></MaterialCommunityIcons>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 3,
              borderColor: "#ffffff",
              borderWidth: 1,
              width: "75%",
              alignItems: "center",
              padding: 10,
              marginBottom: 20
            }}
          >
            <TextInput
              onChangeText={text => this.handler("elevation", text)}
              keyboardType="numeric"
              placeholder="Enter the Elevation"
              style={{
                color: "#ffffff",
                flex: 1
              }}
            ></TextInput>
            <MaterialCommunityIcons
              name="elevation-rise"
              color="#ffffff"
              size={20}
            ></MaterialCommunityIcons>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderRadius: 3,
              borderColor: "#ffffff",
              borderWidth: 1,
              width: "75%",
              alignItems: "center",
              padding: 10,
              marginBottom: 20
            }}
          >
            <TextInput
              onChangeText={text => this.handler("wind", text)}
              keyboardType="numeric"
              placeholder="Enter the Wind"
              style={{
                color: "#ffffff",
                flex: 1
              }}
            ></TextInput>
            <Feather name="wind" color="#ffffff" size={20}></Feather>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.6,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              borderRadius: 3,
              borderColor: "#ffffff",
              backgroundColor: "#ffffff",
              borderWidth: 1
            }}
            onPress={this.calculate}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}
            >
              Calculate
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  inputHolder: {},
  input: {},
  label: {}
});
