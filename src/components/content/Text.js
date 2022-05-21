import React from "react";
import Container from "../base/Container";
import ThemeButton from "../base/Button";

const Text = ({ content }) => {
  return (
    <Container>
      <div className="section">
        <div
          className="prose-style"
          dangerouslySetInnerHTML={{ __html: content.itemText }}
        />
        {content.itemLink.length > 0 && (
          <div className="mt-6 md:mt-12">
            <ThemeButton
              className="btn-primary"
              type="next"
              href={`/${content.itemLink[0].itemLink[0].slug}`}
              label={content.itemLink[0].itemLabel}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Text;
