import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navbar/NavBar'
import Search from './components/search/Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavBar />
        <Search />
      </MuiThemeProvider>
    );
  }
}

export default App;
