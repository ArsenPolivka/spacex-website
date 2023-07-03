import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import Link from 'next/link';
import HomePage from '../organisms/HomePage';
import client from '../../apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/favorites">Favorites</Link>
        </nav>
        <HomePage />
      </RecoilRoot>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
