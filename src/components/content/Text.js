import React from "react";
import Container from "../base/Container";
import parse from "html-react-parser";

const Text = ({ content }) => {
  return (
    <Container>
      <div
        className="section prose-style"
        dangerouslySetInnerHTML={{ __html: content.itemText }}
      />
    </Container>
  );
};

export default Text;
