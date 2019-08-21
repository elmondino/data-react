import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Dashboard} />
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
