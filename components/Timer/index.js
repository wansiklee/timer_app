import React, { Component } from "react";
import { Text, StatusBar } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: #ce0b24;
`;

const Upper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const Lower = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Time = styled.Text`
  color: white;
  font-size: 120;
  font-weight: 100;
`;

class Timer extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle={"light-content"}/>
        <Upper>
          <Time>25:00</Time>
        </Upper>
        <Lower>
          <Text>BUTTONS HERE</Text>
        </Lower>
      </Container>
    );
  }
}

export default Timer;
