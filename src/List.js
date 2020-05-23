import React from "react";
import styled from "@emotion/styled";
import { useIssues } from "./useIssues";

const EmptyList = () => {
  return (
    <div
      style={{
        height: 30,
        background: "grey",
        borderRadius: 6,
        cursor: "pointer"
      }}
    />
  );
};

const MainWrapper = styled.div({
  textAlign: "left",
  background: "#2d2d2d",
  color: "white",
  border: "20px solid #2d2d2d",
  margin: "0px 10px"
});

const TitleInput = styled.input({
  background: "#2d2d2d",
  resize: "none",
  color: "white",
  border: "none",
  width: "100%",
  fontSize: 28,
  fontWeight: 800
});

const DescriptionInput = styled.textarea({
  background: "#2d2d2d",
  resize: "none",
  color: "white",
  border: "none",
  width: "100%",
  fontSize: 18
});

export function ListOfLists(props) {
  const [issues, dispatch] = useIssues();
  const activeIssue = issues.find(issue => issue.id === props.activeIssueId);

  const totalAmountOfGroups = activeIssue?.groups?.length;
  const skipShowingFinalDividingLine = idx =>
    totalAmountOfGroups && totalAmountOfGroups === idx + 1;

  if (!activeIssue) return null;

  function onChangeDescription(evt) {
    dispatch({
      type: "UPDATE_ISSUE_DESCRIPTION",
      payload: {
        description: evt.currentTarget.value,
        issueId: props.activeIssueId
      }
    });
  }

  function onChangeTitle(evt) {
    dispatch({
      type: "UPDATE_ISSUE_TITLE",
      payload: {
        title: evt.currentTarget.value,
        issueId: props.activeIssueId
      }
    });
  }

  return (
    <MainWrapper>
      {(activeIssue.title || activeIssue.title === "") && (
        <h2>
          <TitleInput
            type="text"
            value={activeIssue.title}
            onChange={onChangeTitle}
          />
        </h2>
      )}

      {(activeIssue.summary || activeIssue.summary === "") && (
        <h4>
          <DescriptionInput
            type="text"
            value={activeIssue.summary}
            onChange={onChangeDescription}
          />
        </h4>
      )}

      {activeIssue?.groups?.map((group, idx) => {
        return (
          <React.Fragment key={idx}>
            <h3 style={{ userSelect: "none" }}>
              {group.icon} [{group.title}]
            </h3>
            {group.items.length > 0 && (
              <ul>
                {group.items.map((item, jdx) => (
                  <li key={jdx}>{item.title}</li>
                ))}
              </ul>
            )}
            {group.items.length === 0 && <EmptyList />}
            {skipShowingFinalDividingLine(idx) || <hr />}
          </React.Fragment>
        );
      })}
    </MainWrapper>
  );
}
