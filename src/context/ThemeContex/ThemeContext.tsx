import { createContext } from "react"

export interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",    
  toggleTheme: () => {}, 
})

export default ThemeContext
