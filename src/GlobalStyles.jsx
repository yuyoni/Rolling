import { createGlobalStyle } from 'styled-components';
import Poppins from './assetes/fonts/Poppins-Bold.woff';
import PretendardBold from './assetes/fonts/Pretendard-Bold.woff';
import PretendardRegular from './assetes/fonts/Pretendard-Regular.woff';

const GlobalStyles = createGlobalStyle`
  :root {
    --Purple-100: #F8F0FF;
    --Purple-200: #ECD9FF;
    --Purple-300: #DCB9FF;
    --Purple-400: #C894FD;
    --Purple-500: #AB57FF;
    --Purple-600: #9935FF;
    --Purple-700: #861DEE;
    --Purple-800: #6E0AD1;
    --Purple-900: #5603A7;

    --Orange-100: #FFF0D6;
    --Orange-200: #FFE2AD;
    --Orange-300: #FFC583;
    --Orange-400: #FFAE65;
    --Orange-500: #FF8832;

    --Blue-100: #E2F5FF;
    --Blue-200: #B1E4FF;
    --Blue-300: #7CD2FF;
    --Blue-400: #34B9FF;
    --Blue-500: #00A2FE;

    --Green-100: #E4FBDC;
    --Green-200: #D0F5C3;
    --Green-300: #9BE282;
    --Green-400: #60CF37;
    --Green-500: #2BA600;

    --gray-100: #F6F6F6;
    --gray-200: #EEEEEE;
    --gray-300: #CCCCCC;
    --gray-400: #999999;
    --gray-500: #555555;
    --gray-600: #4A4A4A;
    --gray-700: #3A3A3A;
    --gray-800: #2B2B2B;
    --gray-900: #181818;

    --white : #ffffff;
    --black: #000000;
    --Error : #DC3A3A;
    --Surface : #F6F8FF;
  }

  @font-face {
        font-family: "Poppins-Bold";
        src: url(${Poppins}) format('woff'); 
        font-weight: 700;
    }

  @font-face {
    font-family: "Pretendard-Bold";
    src: url(${PretendardBold}) format('woff'); 
    font-weight: 700;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url(${PretendardRegular}) format('woff'); 
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;

    margin: 0;
    font-family: "Pretendard-Regular"; 
    font-weight: 400;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
