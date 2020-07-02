import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";
import { IssueDataProvider } from "./useIssues";
import { ModalProvider } from "./useModals";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          background-color: black;
        }
      `}
    />
    <IssueDataProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </IssueDataProvider>
  </React.StrictMode>,
  rootElement
);
