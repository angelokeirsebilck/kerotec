import React from "react";
import Container from "../base/Container";
import parse from "html-react-parser";
import { hyphenateSync } from "hyphen/nl";
import { useInView } from "react-intersection-observer";

const Text = ({ content }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="" ref={ref}>
      {inView && (
        <Container>
          <div className="section prose-style">
            {parse(hyphenateSync(content.itemText, { minWordLength: 10 }))}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Text;
