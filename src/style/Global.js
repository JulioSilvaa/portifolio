import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  * {
    margin:0 ;
    padding:0 ;
    box-sizing: border-box;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
  }
 body  {
    background: ${({ theme }) => theme.colors.backgroundBody};
    margin: 0;
  }




`;

export default GlobalStyles;
