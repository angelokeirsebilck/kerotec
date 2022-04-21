import React from "react";
import Container from "../base/Container";
import parse from "html-react-parser";
import FormUI from "../base/Form";

const Form = ({ content, info }) => {
  return (
    <Container>
      <div className="section">
        <div className="prose-style mb-8 md:mb-16">
          {parse(content.itemIntro)}
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <FormUI thanksSlug={content.itemThanksPage[0].slug} />
          <div className="flex md:justify-end">
            <div className="flex flex-col">
              <div className="mb-2 flex">
                <span className="mr-2.5 font-bold text-primary">T</span>
                <a
                  href={`tel:${info.fieldTel1.replace(/\s+/g, "")}`}
                  className="font-medium transition-colors hover:text-primary"
                >
                  {info.fieldTel1} - <span className="text-primary">Ke</span>
                  irsebilck Diego
                </a>
              </div>
              <div className="mb-2 flex">
                <span className="mr-2.5 font-bold text-primary">T</span>
                <a
                  href={`tel:${info.fieldTel2.replace(/\s+/g, "")}`}
                  className="font-medium transition-colors hover:text-primary"
                >
                  {info.fieldTel2} - <span className="text-primary">Ro</span>
                  sseel Jeroen
                </a>
              </div>
              <div className="flex">
                <span className="mr-2.5 font-bold text-primary">E</span>
                <a
                  href={`mailto:${info.fieldEmail.replace(/\s+/g, "")}`}
                  className="font-medium transition-colors  hover:text-primary"
                >
                  {info.fieldEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Form;
