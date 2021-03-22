import React, {useState} from 'react';

export const ThemeContext = React.createContext(null);

export default function App({children}) {
  const [isDark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={[isDark, setDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
