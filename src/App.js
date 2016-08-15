import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Timer from './Timer/Timer';
import Life from './Life/Life';
import Copyright from './Copyright/Copyright';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#ff4081',
    primary1Color: '#ff4081',
    primary2Color: '#ff4081',
    primary3Color: '#ff4081',
    accent1Color: '#ff4081',
    pickerHeaderColor: '#ff4081',
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          <Copyright />      
          <Timer />
          <Life />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
