import React from "react";
import styled from "@emotion/styled";
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
  return (
    <AppWrapper>
      <Modal />
      <Header />

      <BodyWrapper>
        <IssueTabs />

        <br clear="all" />

        <ListOfLists />

        <br clear="all" />

        <QuickAddListSections />
      </BodyWrapper>
    </AppWrapper>
  );
}
