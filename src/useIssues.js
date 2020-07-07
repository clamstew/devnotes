import React, { useReducer, useContext } from "react";
import { activeIssues } from "./sample-data";
import { v4 as uuidv4 } from "uuid";
import sortBy from "lodash/sortBy";

/*
 * [clamstew/issuenotes](https://github.com/clamstew/issuenotes)
 * [React Hooks - A deeper dive featuring useContext and useReducer | TestDriven.io](https://testdriven.io/blog/react-hooks-advanced/)
 * [Hooks API Reference – React](https://reactjs.org/docs/hooks-reference.html#usecontext)
 * [Context – React](https://reactjs.org/docs/context.html)
 */

export const initialState = {
  issues: activeIssues,
  activeIssueId: activeIssues[0].id // will need to set to non-sample data eventually
};

// I imagine this will turn into a "selectors" section like redux
// "functions" capable of finding parts of the sub-state
const getIssueById = (issues, issueId) => {
  return issues.find(issue => issue.id === issueId);
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_ISSUE":
      return { ...state, activeIssueId: action.payload.activeIssueId };

    case "ADD_ISSUE":
      console.log("ADD_ISSUE", action);
      const lastIssueOrderNumber =
        state?.issues?.[state.issues.length - 1]?.order;
      const newIssue = {
        id: uuidv4(),
        title: "New Issue",
        order: lastIssueOrderNumber + 1,
        summary: "Add some details about the issue ...",
        groups: []
      };
      return {
        ...state,
        activeIssueId: newIssue.id,
        issues: sortBy([...state.issues, newIssue], "order")
      };

    case "ADD_SECTION":
      console.log("ADD_SECTION", action);
      console.log("state.issues", state.issues);
      let issue = getIssueById(state.issues, action.payload.issueId);
      console.log("issue", issue);
      if (
        issue &&
        issue?.groups?.find(issue => issue.title === action.payload.title)
      ) {
        console.log("ALREADY HAVE AND ISSUE BY THAT NAME");
        return state;
      }

      if (!issue) {
        console.log("Cannot find issue to update!");
        return state;
      }
      issue.groups = [
        ...issue.groups,
        { title: action.payload.title, icon: action.payload.icon, items: [] }
      ];
      let otherIssues = state.issues.filter(
        iss => iss.id !== action.payload.issueId
      );
      return {
        ...state,
        issues: sortBy([...otherIssues, issue], "order")
      };

    case "UPDATE_ISSUE_TITLE":
      issue = getIssueById(state.issues, action.payload.issueId);
      issue.title = action.payload.title;
      otherIssues = state.issues.filter(
        iss => iss.id !== action.payload.issueId
      );
      return {
        ...state,
        issues: sortBy([...otherIssues, issue], "order")
      };

    case "UPDATE_ISSUE_DESCRIPTION":
      issue = getIssueById(state.issues, action.payload.issueId);
      issue.summary = action.payload.description;
      otherIssues = state.issues.filter(
        iss => iss.id !== action.payload.issueId
      );
      return {
        ...state,
        issues: sortBy([...otherIssues, issue], "order")
      };

    case "REMOVE_ISSUE":
      console.log("REMOVE_ISSUE", state, action);
      return {
        ...state,
        // @TODO - this doesn't do anything yet ...
        issues: sortBy([...state.issues], "order")
      };

    default:
      throw new Error();
  }
}

export const IssueDataContext = React.createContext(initialState);

export const IssueDataProvider = props => {
  const contextValue = useReducer(reducer, initialState);

  return (
    <IssueDataContext.Provider value={contextValue}>
      {props.children}
    </IssueDataContext.Provider>
  );
};

export const useIssues = () => {
  const [issues, dispatch] = useContext(IssueDataContext);
  return [issues, dispatch];
};
