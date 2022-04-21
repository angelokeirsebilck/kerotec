import React from "react";
import useGlobalState from "../../hooks/useGlobalState";
import { resetCookieConsentValue } from "react-cookie-consent";
import { deleteAllCookies } from "../../utils/deleteAllCookies";
import Container from "../base/Container";

const ChangeCookies = () => {
  const { changeShowCookiepopup } = useGlobalState();

  return (
    <Container>
      <button
        className="btn btn-sm btn-primary mb-12 md:mb-28"
        onClick={() => {
          resetCookieConsentValue();
          changeShowCookiepopup("show");
          deleteAllCookies();
        }}
      >
        Wijzig cookie voorkeur
      </button>
    </Container>
  );
};

export default ChangeCookies;
