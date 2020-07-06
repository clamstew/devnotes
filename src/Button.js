import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button({
  color: "white",
  background: "blue",
  fontSize: 18,
  borderRadius: 3,
  cursor: "pointer",
  padding: 10,
  border: "none"
});

export const Button = props => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};
