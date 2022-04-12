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

  useEffect(() => {}, []);

  const changeIsNavOpen = (value) => {
    setIsNavOpen(value);
  };

  const memoedValue = useMemo(
    () => ({
      isNavOpen,
      changeIsNavOpen,
    }),
    [isNavOpen]
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
