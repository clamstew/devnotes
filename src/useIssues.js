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

export const initialState = activeIssues;

// I imagine this will turn into a "selectors" section like redux
// "functions" capable of finding parts of the sub-state
const getIssueById = (state, issueId) => {
  return state.find(issue => issue.id === issueId);
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_ISSUE":
      console.log("ADD_ISSUE", action);
      const lastIssueOrderNumber = state[state.length - 1].order;
      const newIssue = {
        id: uuidv4(),
        title: "New Issue",
        order: lastIssueOrderNumber + 1,
        summary: "Add some details about the issue ...",
        groups: []
      };
      return sortBy([...state, newIssue], "order");

    case "ADD_SECTION":
      console.log("ADD_SECTION", action);
      console.log("state", state);
      let issue = getIssueById(state, action.payload.issueId);
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
      let otherIssues = state.filter(iss => iss.id !== action.payload.issueId);
      return sortBy([...otherIssues, issue], "order");

    case "UPDATE_ISSUE_TITLE":
      issue = getIssueById(state, action.payload.issueId);
      issue.title = action.payload.title;
      otherIssues = state.filter(iss => iss.id !== action.payload.issueId);
      return sortBy([...otherIssues, issue], "order");

    case "UPDATE_ISSUE_DESCRIPTION":
      issue = getIssueById(state, action.payload.issueId);
      issue.summary = action.payload.description;
      otherIssues = state.filter(iss => iss.id !== action.payload.issueId);
      return sortBy([...otherIssues, issue], "order");

    case "REMOVE_ISSUE":
      console.log("REMOVE_ISSUE", state, action);
      return [...state];

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
