import { createContext, useEffect, useState } from "react";

export const appContext = createContext();

export default function AppContextProvider(props) {
  const [state, setState] = useState({});
  return (
    <appContext.Provider value={state}>{props.children}</appContext.Provider>
  );
}
