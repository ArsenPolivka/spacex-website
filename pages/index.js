import { createGlobalStyle } from "styled-components";

import HomePage from "../components/organisms/HomePage";
import {RecoilRoot} from "recoil";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }
`;

export default function Home() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <HomePage />
    </RecoilRoot>
  )
}
