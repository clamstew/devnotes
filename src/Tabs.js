import React from "react";
import styled from "@emotion/styled";
import { useIssues } from "./useIssues";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useHover } from "./hooks/useHover";

const TabsWrapper = styled.div({
  float: "left",
  margin: "0 10px"
});

const IssueTabWrapper = styled.div((props) => {
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
  width: 14,
  height: 14,
  display: "inline-block",
  cursor: "pointer"
});

function IssueTab(props) {
  const [issuesState, dispatch] = useIssues();
  const [hoverRef, isHovered] = useHover();

  var length = 16;
  var title = props.issueTabData.title;
  var myTruncatedTitle = title.substring(0, length);
  const useEllipses = title.length > myTruncatedTitle.length;

  function closeTab(evt) {
    // console.log("running close tab!");
    evt.preventDefault();
    evt.stopPropagation();
    dispatch({
      type: "REMOVE_ISSUE",
      payload: { activeIssueId: props.issueTabData.id }
    });
    // show warning that this is a destructive action
    // run reducer action to remove all of that tab and
    // it's data
    return false;
  }

  return (
    <IssueTabWrapper
      ref={hoverRef}
      isActive={props.issueTabData.id === issuesState.activeIssueId}
      onClick={() => {
        return dispatch({
          type: "SET_ACTIVE_ISSUE",
          payload: {
            activeIssueId: props.issueTabData.id
          }
        });
      }}
    >
      {`${myTruncatedTitle}${useEllipses ? " ..." : ""}`}
      {myTruncatedTitle === "" ? "¯\\_(ツ)_/¯" : null}
      {isHovered ? (
        <CloseIconStyled onClick={closeTab} />
      ) : (
        <div
          style={{
            display: "inline-block",
            width: 14,
            height: 14,
            marginLeft: 5,
            marginTop: 2,
            background: "none"
          }}
        />
      )}
    </IssueTabWrapper>
  );
}

export function IssueTabs() {
  const [issuesState, dispatch] = useIssues();

  return (
    <TabsWrapper>
      {issuesState?.issues?.map((issueTabData) => (
        <IssueTab key={issueTabData.id} issueTabData={issueTabData} />
      ))}

      <AddNewIssueButton
        onClick={() => {
          // add an issue tab, and set as active
          dispatch({ type: "ADD_ISSUE" });
        }}
      >
        +
      </AddNewIssueButton>
    </TabsWrapper>
  );
}
