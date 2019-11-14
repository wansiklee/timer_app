import React, { Component } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import Button from "../Button";

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
        <StatusBar barStyle={"light-content"} />
        <Upper>
          <Time>25:00</Time>
        </Upper>
        <Lower>
          <Button iconName="play-circle" onPress={() => alert("Start Btn")} />
          <Button iconName="stop-circle" onPress={() => alert("Stop Btn")} />
        </Lower>
      </Container>
    );
  }
}

export default Timer;
