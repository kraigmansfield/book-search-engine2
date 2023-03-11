import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client"
import {setContext} from "@apollo/client/link/context";

//GQL endpoint
const httpLink = createHttpLink({
  uri:"/graphql",
});

//Auth jwt token
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem("id.token");
  return {
    headers: {
      ...headers,
      authorization: token? `Bearer $token` : "",
    },
  };
});

//authLink middleware
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        <Navbar />
        <Routes>
          <Route exact path ="/" component={SearchBooks} />
          <Route exact path ="/saved" component={SavedBooks} />
          <Route render={() => <h1 className="display-2">Wrong page</h1>} />
        </Routes>
        </>
      </Router>
    </ApolloProvider>
  )
}


export default App;
