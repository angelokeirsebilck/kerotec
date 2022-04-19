import React from "react";
import Container from "../base/Container";
import parse from "html-react-parser";

const Text = ({ content }) => {
  return (
    <Container>
      <div className="section prose-style">
        {parse(content.itemText, { minWordLength: 10 })}
      </div>
    </Container>
  );
};

export default Text;
