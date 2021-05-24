import { createContext } from "react";

const ThemeContext = createContext({ mode: true, setMode: () => {} });

export default ThemeContext;
