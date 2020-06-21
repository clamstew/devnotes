import React, { useState } from "react";
import { useComponentVisible } from "./useComponentVisible";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";

const EditModeTextArea = styled.textarea({
  background: "#2d2d2d",
  color: "white",
  resize: "none",
  border: "1px solid white",
  padding: 12,
  width: "100%",
  boxSizing: "border-box",
  fontSize: 18
});

const NoContentPrompt = styled.div({
  backgroundColor: "grey",
  paddingTop: 6,
  paddingBottom: 6,
  borderRadius: 3,
  color: "black",
  textAlign: "center",
  cursor: "pointer"
});

export const EditableMarkdownArea = props => {
  const {
    ref,
    isComponentVisible: viewMarkdownMode,
    // NOTE: opposite of View Markdown mode is "edit mode"
    setIsComponentVisible: setViewMarkdown
  } = useComponentVisible(true);
  const [markdown, setMarkdownValue] = useState(props.markdown);

  if (viewMarkdownMode && markdown === undefined) {
    return (
      <NoContentPrompt
        onClick={() => {
          setViewMarkdown(false);
        }}
      >
        Click to add text.
      </NoContentPrompt>
    );
  }

  if (viewMarkdownMode) {
    return (
      <div
        onClick={() => {
          setViewMarkdown(false);
        }}
      >
        <ReactMarkdown source={markdown} />
      </div>
    );
  }

  return (
    <div ref={ref}>
      <EditModeTextArea
        value={markdown}
        onChange={e => {
          return setMarkdownValue(e.target.value);
        }}
        onBlur={e => {
          return setViewMarkdown(true);
        }}
      />
    </div>
  );
};
