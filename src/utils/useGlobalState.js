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

  const memoedValue = useMemo(
    () => ({
      isNavOpen,
      setIsNavOpen,
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
