import React, { Suspense } from "react";
import dynamic from "next/dynamic";
// import Cta from "./CTA";
// import Form from "./Form";
// import Services from "./Services";
import Spinner from "../base/Spinner";
// import References from "./References";
// import Text from "./Text";
// import TextMedia from "./TextMedia";
// import USP from "./USP";

const USP = dynamic(() => import("./USP"), {});
const TextMedia = dynamic(() => import("./TextMedia"));
const Text = dynamic(() => import("./Text"));
const References = dynamic(() => import("./References"));
const Form = dynamic(() => import("./Form"));
const Cta = dynamic(() => import("./CTA"));
const Services = dynamic(() => import("./Services"));

// const USP = dynamic(() => import("./USP"), {
//   suspense: true,
// });
// const TextMedia = dynamic(() => import("./TextMedia"), {
//   suspense: true,
// });
// const Text = dynamic(() => import("./Text"), {
//   suspense: true,
// });
// const References = dynamic(() => import("./References"), {
//   suspense: true,
// });
// const Form = dynamic(() => import("./Form"), {
//   suspense: true,
// });
// const Cta = dynamic(() => import("./CTA"), {
//   suspense: true,
// });
// const Services = dynamic(() => import("./Services"), {
//   suspense: true,
// });

const Content = ({ content, usp, info, lcp, services }) => {
  const getContentBlock = () => {
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
        case "fieldContentKerotec_typeServices_BlockType":
          return (
            <Services key={`Services${c.id}`} content={c} services={services} />
          );
        default:
          return null;
      }
    });
  };

  // return content.map((c, index) => {
  //   switch (c.__typename) {
  //     case "fieldContentKerotec_typeText_BlockType":
  //       return <Text key={`Text${c.id}`} content={c} />;
  //     case "fieldContentKerotec_typeTextMedia_BlockType":
  //       return (
  //         <TextMedia
  //           key={`TextMedia${c.id}`}
  //           content={c}
  //           lcp={lcp}
  //           index={index}
  //         />
  //       );
  //     case "fieldContentKerotec_typeUsp_BlockType":
  //       return <USP key={`USP${c.id}`} content={c} usp={usp} />;
  //     case "fieldContentKerotec_typeCta_BlockType":
  //       return <Cta key={`Cta${c.id}`} content={c} />;
  //     case "fieldContentKerotec_typeForm_BlockType":
  //       return <Form key={`Form${c.id}`} info={info} content={c} />;
  //     case "fieldContentKerotec_typeReferences_BlockType":
  //       return <References key={`References${c.id}`} content={c} />;
  //     case "fieldContentKerotec_typeServices_BlockType":
  //       return (
  //         <Services key={`Services${c.id}`} content={c} services={services} />
  //       );
  //     default:
  //       return null;
  //   }
  // });

  return <Suspense fallback={<Spinner />}>{getContentBlock()}</Suspense>;
};

export default Content;
