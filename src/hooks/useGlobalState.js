import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showCookiePopup, setShowCookiepopup] = useState("byCookieValue");
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {}, []);

  const changeIsNavOpen = (value) => {
    setIsNavOpen(value);
  };

  const changeShowCookiepopup = (value) => {
    setShowCookiepopup(value);
  };

  const memoedValue = useMemo(
    () => ({
      isNavOpen,
      changeIsNavOpen,
      showCookiePopup,
      changeShowCookiepopup,
      initialLoad,
      setInitialLoad,
    }),
    [isNavOpen, showCookiePopup, initialLoad]
  );

  return (
    <GlobalStateContext.Provider value={memoedValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default function useGlobalState() {
  return useContext(GlobalStateContext);
}
