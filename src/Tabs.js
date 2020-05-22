import React from "react";
import styled from "@emotion/styled";
import { useIssues } from "./useIssues";
import { IoMdCloseCircleOutline } from "react-icons/io";

const TabsWrapper = styled.div({
  float: "left",
  margin: "0 10px"
});

const IssueTabWrapper = styled.div(props => {
  return {
    borderTop: "1px solid grey",
    background: props.isActive ? "#2d2d2d" : "#1b1b1b",
    color: "white",
    fontWeight: 700,
    display: "inline-block",
    padding: "4px 16px",
    cursor: props.isActive ? "move" : "pointer",
    ":hover": {
      background: props.isActive ? "#2d2d2d" : "grey"
    },
    userSelect: "none"
  };
});

const AddNewIssueButton = styled.div({
  borderTop: "1px solid grey",
  borderLeft: "1px solid grey",
  borderRight: "1px solid grey",
  display: "inline-block",
  color: "white",
  background: "#1b1b1b",
  height: 18,
  width: 8,
  padding: "4px 16px",
  cursor: "pointer",
  userSelect: "none",
  ":hover": {
    background: "lightgrey",
    color: "black"
  }
});

const CloseIconStyled = styled(IoMdCloseCircleOutline)({
  marginLeft: 5,
  marginTop: 2,
  cursor: "pointer"
});

function IssueTab(props) {
  const [, dispatch] = useIssues();

  function closeTab(evt) {
    // console.log("running close tab!");
    evt.preventDefault();
    evt.stopPropagation();
    dispatch({
      type: "REMOVE_ISSUE",
      payload: { activeIssueId: props.activeIssueId }
    });
    // show warning that this is a destructive action
    // run reducer action to remove all of that tab and
    // it's data
  }

  return (
    <IssueTabWrapper
      isActive={props.issueTabData.id === props.activeIssueId}
      onClick={() => props.setActiveIssueId(props.issueTabData.id)}
    >
      {props.issueTabData.title}
      <CloseIconStyled onClick={closeTab} />
    </IssueTabWrapper>
  );
}

export function IssueTabs(props) {
  const [activeIssues, dispatch] = useIssues();

  return (
    <TabsWrapper>
      {activeIssues.map(issueTabData => (
        <IssueTab
          key={issueTabData.id}
          issueTabData={issueTabData}
          activeIssueId={props.activeIssueId}
          setActiveIssueId={props.setActiveIssueId}
        />
      ))}

      <AddNewIssueButton onClick={() => dispatch({ type: "ADD_ISSUE" })}>
        +
      </AddNewIssueButton>
    </TabsWrapper>
  );
}
