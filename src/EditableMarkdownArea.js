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

export const EditableMarkdownArea = props => {
  const {
    ref,
    isComponentVisible: editMode,
    setIsComponentVisible: setEditMode
  } = useComponentVisible(true);
  const [markdown, setMarkdownValue] = useState(props.markdown);

  return editMode ? (
    <div ref={ref}>
      <EditModeTextArea
        value={markdown}
        onChange={e => {
          return setMarkdownValue(e.target.value);
        }}
        onBlur={e => {
          return setEditMode(false);
        }}
      />
    </div>
  ) : (
    <div
      onClick={() => {
        setEditMode(true);
      }}
    >
      <ReactMarkdown source={markdown} />
    </div>
  );
};
