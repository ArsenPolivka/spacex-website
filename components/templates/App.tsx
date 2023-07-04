import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import Link from 'next/link';

import client from '../../apollo/client';

import HomePage from '../organisms/HomePage';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">Favorites</Link>
        </nav>
        <HomePage />
      </RecoilRoot>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
