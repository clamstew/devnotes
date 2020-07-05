import React from "react";
import styled from "@emotion/styled";
import { GenericPortal } from "./portal";
import { useModals } from "./useModals";

const ModalBackground = styled.div(props => {
  const styles = {
    background: "black",
    color: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0
  };

  if (props.showBackdrop) {
    styles.opacity = 0.6;
  }

  return styles;
});

const ModalWrapper = styled.div({
  background: "black",
  opacity: 1,
  color: "white",
  height: 200,
  position: "absolute",
  top: 200,
  left: 200,
  width: 300,
  padding: 20,
  fontFamily: "sans-serif",
  borderRadius: 6
});

export const Modal = () => {
  const [modals, dispatch] = useModals();

  if (!modals.showRemoveDataModal) return null;

  function burnItDown() {
    dispatch({ type: "HIDE_REMOVE_DATA_MODAL" });
  }

  return (
    <ModalBackground showBackdrop={true}>
      <GenericPortal>
        {modals.showRemoveDataModal && (
          <ModalWrapper>
            <h1>Self-Destruct</h1>

            <p>
              No need for GDPR laws here. We don't have any of your data. You
              do! It's in localStorage.
            </p>

            <p>If you'd like to delete it, and skip town, click below:</p>

            <button onClick={burnItDown}>Burn it down</button>
          </ModalWrapper>
        )}
      </GenericPortal>
    </ModalBackground>
  );
};
