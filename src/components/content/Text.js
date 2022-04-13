import React from "react";
import Container from "../base/Container";
import parse from "html-react-parser";

const Text = ({ content }) => {
  return (
    <Container>
      <div className="section prose">{parse(content.itemText)}</div>
    </Container>
  );
};

export default Text;
