import React from "react";
import styled from "@emotion/styled";
import { useIssues } from "./useIssues";
import { EditableMarkdownArea } from "./EditableMarkdownArea";
import TextareaAutosize from "react-autosize-textarea";

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

const DescriptionInput = styled(TextareaAutosize)({
  background: "#2d2d2d",
  resize: "none",
  color: "white",
  border: "none",
  width: "100%",
  fontFamily: "sans-serif",
  fontSize: 18
});

export function ListOfLists() {
  const [issuesState, dispatch] = useIssues();
  const activeIssueId = issuesState?.activeIssueId;
  const activeIssue = issuesState?.issues?.find(
    (issue) => issue.id === activeIssueId
  );

  const totalAmountOfGroups = activeIssue?.groups?.length;
  const skipShowingFinalDividingLine = (idx) =>
    totalAmountOfGroups && totalAmountOfGroups === idx + 1;

  if (!activeIssue) return null;

  function onChangeDescription(evt) {
    dispatch({
      type: "UPDATE_ISSUE_DESCRIPTION",
      payload: {
        description: evt.currentTarget.value,
        issueId: activeIssueId
      }
    });
  }

  function onChangeTitle(evt) {
    dispatch({
      type: "UPDATE_ISSUE_TITLE",
      payload: {
        title: evt.currentTarget.value,
        issueId: activeIssueId
      }
    });
  }

  return (
    <MainWrapper>
      {(activeIssue.title || activeIssue.title === "") && (
        <h2>
          <TitleInput
            type="text"
            placeholder="Add a title ..."
            value={activeIssue.title}
            onChange={onChangeTitle}
          />
        </h2>
      )}

      {(activeIssue.summary || activeIssue.summary === "") && (
        <h4>
          <DescriptionInput
            type="text"
            placeholder="Add a description ..."
            value={activeIssue.summary}
            onChange={onChangeDescription}
          />
        </h4>
      )}

      {activeIssue?.groups?.length > 0 ? <hr /> : null}

      {activeIssue?.groups?.map((group, idx) => {
        return (
          <React.Fragment key={idx}>
            <h3 style={{ userSelect: "none" }}>
              {group.icon}&nbsp;&nbsp;{group.title}
            </h3>
            <EditableMarkdownArea markdown={group.description} />
            {skipShowingFinalDividingLine(idx) || <hr />}
          </React.Fragment>
        );
      })}
    </MainWrapper>
  );
}
