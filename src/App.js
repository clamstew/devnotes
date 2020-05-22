import React, { useState } from "react";
import styled from "@emotion/styled";
import { activeIssues } from "./sample-data";
import { IssueTabs } from "./Tabs";
import { ListOfLists } from "./List";
import { Header } from "./Header";
import { QuickAddListSections } from "./QuickAddSections";

const AppWrapper = styled.div({
  fontFamily: "sans-serif",
  backgroundColor: "black",
  maxWidth: 1020,
  margin: "0 auto"
});

export default function App() {
  const [activeIssueId, setActiveIssueId] = useState(activeIssues[0].id);

  return (
    <AppWrapper>
      <Header />

      <IssueTabs
        activeIssueId={activeIssueId}
        setActiveIssueId={setActiveIssueId}
      />

      <br clear="all" />

      <ListOfLists activeIssueId={activeIssueId} />

      <br clear="all" />

      <QuickAddListSections activeIssueId={activeIssueId} />
    </AppWrapper>
  );
}