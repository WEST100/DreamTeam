import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    let changeTheme = !theme
    
    setTheme(changeTheme);
    localStorage.setItem("theme", JSON.stringify(changeTheme))
  };

  useEffect(()=> {
    setTheme(JSON.parse(localStorage.getItem("theme")))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
