import React from "react";
import styled from "@emotion/styled";

const HeaderWrapper = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 40,
  background: "rgb(40,42,44)",
  height: 40
});

const Title = styled.div({
  color: "#b1b1b1",
  margin: 10,
  userSelect: "none",
  marginTop: 4,
  fontSize: 24,
  float: "left"
});

const Subtitle = styled.h4({
  color: "#b1b1b1",
  margin: 10,
  userSelect: "none",
  marginBottom: 30,
  float: "right"
});

export function Header() {
  return (
    <HeaderWrapper>
      <Title>
        <span role="img" aria-label="notepad">
          📝
        </span>{" "}
        Notes.Build
      </Title>
      <Subtitle>markdown build notes for dev issues</Subtitle>
    </HeaderWrapper>
  );
}
