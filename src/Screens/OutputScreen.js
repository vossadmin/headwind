import React, { Component } from "react";
import { Text, View, StatusBar, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";
export default class OutputScreen extends Component {
  render() {
    console.log(this.props.values);
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
            backgroundColor: "rgba(54, 16, 47,0.8)"
          }}
        >
          <TouchableOpacity
            onPress={Actions.pop}
            style={{
              width: "100%",
              padding: 20,
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <View>
              <Ionicons
                name="md-arrow-back"
                color="#ffffff"
                size={40}
              ></Ionicons>
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                flex: 1,
                textAlign: "center"
              }}
            >
              Go Back
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              flex: 1,
              marginBottom: 80
            }}
          >
            <View
              style={{
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#ffffff",
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                Hurt/Help%
              </Text>
              <Text style={{ color: "#fff", marginBottom: 10 }}>100.00</Text>
              <Text style={{ color: "#fff", marginBottom: 10 }}>83.50</Text>
              <Text style={{ color: "#fff", marginBottom: 10 }}>66.50</Text>
              <Text style={{ color: "#fff", marginBottom: 10 }}>50.00</Text>
              <Text style={{ color: "#fff", marginBottom: 10 }}>33.00</Text>
              <Text style={{ color: "#fff", marginBottom: 10 }}>16.50</Text>
              <Text style={{ color: "#fff", marginBottom: 10 }}>0.00</Text>
            </View>
            <View
              style={{
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#f5424e",
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                Headwind
              </Text>
              <Text style={{ color: "#f5424e", marginBottom: 10 }}>
                {Number(this.props.values.headwind6).toFixed(2)}
              </Text>
              <Text style={{ color: "#f5424e", marginBottom: 10 }}>
                {Number(this.props.values.headwind7).toFixed(2)}
              </Text>
              <Text style={{ color: "#f5424e", marginBottom: 10 }}>
                {Number(this.props.values.headwind8).toFixed(2)}
              </Text>
              <Text style={{ color: "#f5424e", marginBottom: 10 }}>
                {Number(this.props.values.headwind9).toFixed(2)}
              </Text>
              <Text style={{ color: "#f5424e", marginBottom: 10 }}>
                {Number(this.props.values.headwind10).toFixed(2)}
              </Text>
              <Text style={{ color: "#f5424e", marginBottom: 10 }}>
                {Number(this.props.values.headwind11).toFixed(2)}
              </Text>
              <Text style={{ color: "#f5424e", marginBottom: 10 }}>
                {Number(this.props.values.headwind12).toFixed(2)}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#0ba11a",
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                Tailwind
              </Text>
              <Text style={{ color: "#0ba11a", marginBottom: 10 }}>
                {Number(this.props.values.tailwind6).toFixed(2)}
              </Text>
              <Text style={{ color: "#0ba11a", marginBottom: 10 }}>
                {Number(this.props.values.tailwind7).toFixed(2)}
              </Text>
              <Text style={{ color: "#0ba11a", marginBottom: 10 }}>
                {Number(this.props.values.tailwind8).toFixed(2)}
              </Text>
              <Text style={{ color: "#0ba11a", marginBottom: 10 }}>
                {Number(this.props.values.tailwind9).toFixed(2)}
              </Text>
              <Text style={{ color: "#0ba11a", marginBottom: 10 }}>
                {Number(this.props.values.tailwind10).toFixed(2)}
              </Text>
              <Text style={{ color: "#0ba11a", marginBottom: 10 }}>
                {Number(this.props.values.tailwind11).toFixed(2)}
              </Text>
              <Text style={{ color: "#0ba11a", marginBottom: 10 }}>
                {Number(this.props.values.tailwind12).toFixed(2)}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginBottom: 20,
              alignItems: "center"
            }}
            onPress={Actions.input}
          >
            <Ionicons name="md-refresh" color="#ffffff" size={40}></Ionicons>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                marginTop: 10
              }}
            >
              Try again
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
