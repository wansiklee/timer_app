import React, { Component } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.View`
  flex: 1;
  background-color: midnightblue;
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

function formatTime(time) {
  let min = Math.floor(time / 60);
  let sec = Math.floor(time % 60);
  if (min < 10) {
    min = `0` + min;
  }
  if (sec < 10) {
    sec = `0` + sec;
  }
  return `${min}:${sec}`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInteval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timerInteval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timerInteval);
    }
  }
  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    return (
      <Container>
        <StatusBar barStyle={"light-content"} />
        <Upper>
          <Time>{formatTime(timerDuration - elapsedTime)}</Time>
        </Upper>
        <Lower>
          {!isPlaying ? (
            <Button iconName="play-circle" onPress={startTimer} />
          ) : (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </Lower>
      </Container>
    );
  }
}

export default Timer;
