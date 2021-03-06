import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Battle from "./Battle";
import Popular from "./Popular";
import Nav from "./Nav";

function App() {
    return (
        <Router>
            <div className="container">
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/popular' component={Popular} />
                    <Route exact path='/battle' component={Battle} />
                    <Route render={() => <p>Not Found</p>} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
