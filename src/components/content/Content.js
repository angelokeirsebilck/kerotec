import React from "react";
import Text from "./Text";
import TextMedia from "./TextMedia";
import USP from "./USP";

const Content = ({ content, usp }) => {
  return content.map((c) => {
    switch (c.__typename) {
      case "fieldContentKerotec_typeText_BlockType":
        return <Text key={`Text${c.id}`} content={c} />;
      case "fieldContentKerotec_typeTextMedia_BlockType":
        return <TextMedia key={`TextMedia${c.id}`} content={c} />;
      case "fieldContentKerotec_typeUsp_BlockType":
        return <USP key={`USP${c.id}`} content={content} usp={usp} />;
      default:
        return null;
    }
  });
};

export default Content;
