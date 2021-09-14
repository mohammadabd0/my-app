import { render } from '@testing-library/react';
import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';


class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>

        <Main> </Main>

        <Footer></Footer>

      </>
    )
  }
}

export default App;
