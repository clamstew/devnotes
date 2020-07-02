import React, { useState } from "react";
import styled from "@emotion/styled";
import { activeIssues } from "./sample-data";
import { IssueTabs } from "./Tabs";
import { ListOfLists } from "./List";
import { Header } from "./Header";
import { QuickAddListSections } from "./QuickAddSections";
import { Modal } from "./Modal";

const AppWrapper = styled.div({
  fontFamily: "sans-serif",
  backgroundColor: "black",
  maxWidth: 1020,
  margin: "0 auto"
});

const BodyWrapper = styled.div({
  marginTop: 80
});

export default function App() {
  const [activeIssueId, setActiveIssueId] = useState(activeIssues[0].id);

  return (
    <AppWrapper>
      <Modal />
      <Header />

      <BodyWrapper>
        <IssueTabs
          activeIssueId={activeIssueId}
          setActiveIssueId={setActiveIssueId}
        />

        <br clear="all" />

        <ListOfLists activeIssueId={activeIssueId} />

        <br clear="all" />

        <QuickAddListSections activeIssueId={activeIssueId} />
      </BodyWrapper>
    </AppWrapper>
  );
}
