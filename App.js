import React, { Component } from "react";
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import InputScreen from "./src/Screens/InputScreen";
import OutputScreen from "./src/Screens/OutputScreen";

export default class App extends Component {
  state = {
    headwind6: 0,
    headwind7: 0,
    headwind8: 0,
    headwind9: 0,
    headwind10: 0,
    headwind11: 0,
    headwind12: 0,
    tailwind6: 0,
    tailwind7: 0,
    tailwind8: 0,
    tailwind9: 0,
    tailwind10: 0,
    tailwind11: 0,
    tailwind12: 0
  };
  setValues = values => {
    this.setState(
      {
        ...values
      },
      () => {
        Actions.output();
      }
    );
  };
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            hideNavBar
            key="input"
            component={props => (
              <InputScreen setValues={this.setValues}></InputScreen>
            )}
          ></Scene>
          <Scene
            hideNavBar
            key="output"
            component={props => (
              <OutputScreen values={this.state}></OutputScreen>
            )}
          ></Scene>
        </Stack>
      </Router>
    );
  }
}
