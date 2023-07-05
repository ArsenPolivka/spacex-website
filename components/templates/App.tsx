import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import { Toaster } from "react-hot-toast";

import client from '../../apollo/client';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
        <Toaster />
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
