import React, { useState, useRef, useEffect } from "react";
import { useComponentVisible } from "./hooks/useComponentVisible";
import ReactMarkdown from "react-markdown";
import styled from "@emotion/styled";
import TextareaAutosize from "react-autosize-textarea";

const EditModeTextArea = styled(TextareaAutosize)({
  background: "#2d2d2d",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "white",
  resize: "none",
  border: "1px solid white",
  padding: 12,
  width: "100%",
  boxSizing: "border-box",
  fontSize: 18
});

const MarkdownViewerWrapper = styled.div({
  "& a": {
    color: "darkgrey"
  }
});

const NoContentPrompt = styled.div({
  backgroundColor: "#3c3a3a",
  paddingTop: 6,
  paddingBottom: 6,
  borderRadius: 3,
  color: "#909090",
  textAlign: "center",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: 12
});

export const EditableMarkdownArea = (props) => {
  const {
    ref,
    isComponentVisible: viewMarkdownMode,
    // NOTE: opposite of View Markdown mode is "edit mode"
    setIsComponentVisible: setViewMarkdown
  } = useComponentVisible(true);

  const [markdown, setMarkdownValue] = useState(props.markdown);

  const textareaRef = useRef(null);

  useEffect(() => {
    return textareaRef?.current?.focus();
  });

  if (viewMarkdownMode && markdown === undefined) {
    return (
      <NoContentPrompt
        onClick={() => {
          setViewMarkdown(false);
        }}
      >
        Click to add markdown text
      </NoContentPrompt>
    );
  }

  if (viewMarkdownMode) {
    return (
      <MarkdownViewerWrapper
        onClick={() => {
          setViewMarkdown(false);
        }}
      >
        <ReactMarkdown source={markdown} />
      </MarkdownViewerWrapper>
    );
  }

  return (
    <div ref={ref}>
      <EditModeTextArea
        ref={textareaRef}
        value={markdown}
        onChange={(e) => {
          return setMarkdownValue(e.target.value);
        }}
        onBlur={(e) => {
          return setViewMarkdown(true);
        }}
      />
    </div>
  );
};
