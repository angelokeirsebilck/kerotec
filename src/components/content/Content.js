import React from "react";
import Cta from "./CTA";
import Form from "./Form";
import Text from "./Text";
import TextMedia from "./TextMedia";
import USP from "./USP";

const Content = ({ content, usp, info }) => {
  return content.map((c) => {
    switch (c.__typename) {
      case "fieldContentKerotec_typeText_BlockType":
        return <Text key={`Text${c.id}`} content={c} />;
      case "fieldContentKerotec_typeTextMedia_BlockType":
        return <TextMedia key={`TextMedia${c.id}`} content={c} />;
      case "fieldContentKerotec_typeUsp_BlockType":
        return <USP key={`USP${c.id}`} content={c} usp={usp} />;
      case "fieldContentKerotec_typeCta_BlockType":
        return <Cta key={`Cta${c.id}`} content={c} />;
      case "fieldContentKerotec_typeForm_BlockType":
        return <Form key={`Form${c.id}`} info={info} content={c} />;
      default:
        return null;
    }
  });
};

export default Content;
