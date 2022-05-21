import React from "react";
import dynamic from "next/dynamic";
import Cta from "./CTA";
// import Form from "./Form";
// import References from "./References";
import Text from "./Text";
import TextMedia from "./TextMedia";
import USP from "./USP";

// const USP = dynamic(() => import("./USP"));
// const TextMedia = dynamic(() => import("./TextMedia"));
// const Text = dynamic(() => import("./Text"));
const References = dynamic(() => import("./References"));
const Form = dynamic(() => import("./Form"));
// const Cta = dynamic(() => import("./CTA"));

const Content = ({ content, usp, info, lcp }) => {
  return content.map((c, index) => {
    switch (c.__typename) {
      case "fieldContentKerotec_typeText_BlockType":
        return <Text key={`Text${c.id}`} content={c} />;
      case "fieldContentKerotec_typeTextMedia_BlockType":
        return (
          <TextMedia
            key={`TextMedia${c.id}`}
            content={c}
            lcp={lcp}
            index={index}
          />
        );
      case "fieldContentKerotec_typeUsp_BlockType":
        return <USP key={`USP${c.id}`} content={c} usp={usp} />;
      case "fieldContentKerotec_typeCta_BlockType":
        return <Cta key={`Cta${c.id}`} content={c} />;
      case "fieldContentKerotec_typeForm_BlockType":
        return <Form key={`Form${c.id}`} info={info} content={c} />;
      case "fieldContentKerotec_typeReferences_BlockType":
        return <References key={`References${c.id}`} content={c} />;
      default:
        return null;
    }
  });
};

export default Content;
