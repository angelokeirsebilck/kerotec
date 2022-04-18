import React from "react";
import Container from "../base/Container";
import parse from "html-react-parser";
import { hyphenateSync } from "hyphen/nl";

const Text = ({ content }) => {
  return (
    <Container>
      <div className="section prose-style">
        {parse(hyphenateSync(content.itemText, { minWordLength: 10 }))}
      </div>
    </Container>
  );
};

export default Text;
