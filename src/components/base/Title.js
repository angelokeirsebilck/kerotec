import React from "react";
import Container from "./Container";
import TitleShape from "../../../public/img/svg/title-shape2.svg";
import { hyphenateSync } from "hyphen/nl";

const Title = ({ title }) => {
  return (
    <div className="bg-primary-bg pt-16 pb-10">
      <Container>
        <h1 className="heading1-clamp relative inline-block">
          {hyphenateSync(title, { minWordLength: 10 })}
        </h1>
        <TitleShape className="mt-4" />
      </Container>
    </div>
  );
};

export default Title;
