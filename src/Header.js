import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1({
  color: "#b1b1b1",
  margin: 10,
  userSelect: "none",
  marginTop: 30
});

const Subtitle = styled.h4({
  color: "#b1b1b1",
  margin: 10,
  userSelect: "none",
  marginBottom: 30
});

export function Header() {
  return (
    <>
      <Title>
        <span role="img" aria-label="notepad">
          📝
        </span>{" "}
        &lt;Dev.Notes /&gt;
      </Title>
      <Subtitle>
        [ Collect and standardize build notes for dev issues ]
      </Subtitle>
    </>
  );
}
