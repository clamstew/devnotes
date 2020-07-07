import React from "react";
import styled from "@emotion/styled";
import { useIssues } from "./useIssues";

const QuickAddListSectionsWrapper = styled.div({
  background: "black",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left",
  padding: 10,
  marginTop: 10,
  marginBottom: 10
});

const QuickAddItem = styled.span({
  background: "#2d2d2d",
  color: "white",
  display: "inline-block",
  borderRadius: 4,
  padding: "5px 10px",
  userSelect: "none",
  cursor: "pointer",
  float: "left",
  marginRight: 8,
  marginBottom: 8,
  ":hover": {
    opacity: 0.7
  }
});

// @FIXME - turn into objects with {title, icon, ..}
const SUGGESTIONS = [
  "➕All",
  "🔴Do Next",
  "🔴ToDo",
  "⚠️Clean up",
  "⚠️Design Review Items",
  "✅Done",
  "🔴To Put on PR",
  "✅Put on PR",
  "💡Future Ideas",
  "💡Unrelated"
];

export function QuickAddListSections() {
  const [issuesState, dispatch] = useIssues();

  const activeIssue = issuesState?.issues?.find(
    issue => issue.id === issuesState.activeIssueId
  );

  const unusedSuggestions = suggestion => {
    const activeIssueHasSection = activeIssue?.groups?.find(
      section => section.title === suggestion
    );
    return !activeIssueHasSection;
  };

  return (
    <QuickAddListSectionsWrapper>
      {SUGGESTIONS.filter(unusedSuggestions).map(suggestion => (
        <QuickAddItem
          onClick={() => {
            if (suggestion === "➕All") {
              SUGGESTIONS.filter(sugg => sugg !== "➕All").forEach(sugg => {
                dispatch({
                  type: "ADD_SECTION",
                  payload: {
                    title: sugg,
                    icon: "",
                    issueId: issuesState.activeIssueId
                  }
                });
              });
              return;
            }
            dispatch({
              type: "ADD_SECTION",
              payload: {
                title: suggestion,
                icon: "",
                issueId: issuesState.activeIssueId
              }
            });
          }}
          key={suggestion}
        >
          {suggestion}
        </QuickAddItem>
      ))}
    </QuickAddListSectionsWrapper>
  );
}
