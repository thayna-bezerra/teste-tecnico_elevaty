import { ThemeProvider } from 'styled-components'
import { Home } from "./pages/Home";

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';

export function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <Header />
      <Home/>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}
