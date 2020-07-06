import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button(props => {
  const styles = {
    color: "white",
    background: "grey", // should default be grey?
    fontSize: 18,
    borderRadius: 3,
    cursor: "pointer",
    padding: 10,
    border: "none"
  };

  if (props.type === "primary") {
    styles.background = "blue";
  }

  if (props.type === "secondary") {
    styles.background = "lightblue";
  }

  if (props.type === "alert") {
    styles.background = "orange";
  }

  if (props.type === "danger") {
    styles.background = "red";
  }

  if (props.type === "success") {
    styles.background = "green";
  }

  return styles;
});

export const Button = props => {
  return (
    <StyledButton type={props.type} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
};

export const PrimaryButton = props => <Button {...props} />;
export const SecondaryButton = props => (
  <Button {...props} type={"secondary"} />
);
export const AlertButton = props => <Button {...props} type={"alert"} />;
export const DangerButton = props => <Button {...props} type={"danger"} />;
export const SuccessButton = props => <Button {...props} type={"success"} />;
