import React from "react";
import Text from "./Text";

const Content = ({ content }) => {
  return content.map((c) => {
    switch (c.__typename) {
      case "fieldContentKerotec_typeText_BlockType":
        return <Text key={`Text${c.id}`} content={c} />;

      default:
        return null;
    }
  });
};

export default Content;
