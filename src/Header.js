import React from "react";
import styled from "@emotion/styled";
import { BsTrashFill } from "react-icons/bs";
import { useModals } from "./useModals";

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

const BurnDownAllTheDataIcon = styled(BsTrashFill)({
  cursor: "pointer"
});

export function Header() {
  const [modals, dispatch] = useModals();
  function launchConfirmRemoveDataModal() {
    // console.log("launch modal... to confirm destructive action here..");
    if (modals.showRemoveDataModal === false) {
      dispatch({ type: "SHOW_REMOVE_DATA_MODAL" });
    }
  }

  return (
    <HeaderWrapper>
      <Title>
        <span role="img" aria-label="notepad">
          📝
        </span>{" "}
        Notes.Build
      </Title>
      <Subtitle>
        markdown build notes for dev issues{" "}
        <BurnDownAllTheDataIcon onClick={launchConfirmRemoveDataModal} />
      </Subtitle>
    </HeaderWrapper>
  );
}
