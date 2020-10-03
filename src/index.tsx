import * as React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { Header } from 'components/Header/Header';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { Fun } from 'components/Fun/Fun';
import {Contacts} from "components/Contacts/Contacts";
import { Main } from 'style/main';
import {Admin} from "components/Admin/Admin";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Root: React.FC = () => (
  <>
    <Normalize />
    <Main />

    <div id="wrapper">
      <Header alt='STOLENTIQ STUDIO'/>

      <Portfolio />

      <Fun />

      <Contacts />

    </div>
  </>
);

const App: React.FC = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/">
                    <Root />
                </Route>
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(<App />, document.getElementById('root'));
