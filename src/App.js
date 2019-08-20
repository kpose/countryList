import React, { Component } from 'react';
    import logo from './globe.jpg';
    import './App.css';
    import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

    import Countries from './components/Countries';


    const Home = () => (
      <div>
        Home
      </div>
    )

    

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/countries">
        <button>Countries</button>
      </Link>
    </div>
  );
};

    class App extends Component {
      render() {
        return (
          <Router>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Country List. </h1>
                <MainMenu />
              </header>
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/countries" component={Countries} />
                
                
                
              </div>
            </div>
          </Router>
        );
      }
    }

    export default App;