import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Data from './components/Data';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route exact path='/'>
            <div>
              <Form />
            </div>
          </Route>
          <Route exact path='/data'>
            <Data />
          </Route>
          <Route path='*'>
            page not found please make sure that you have the right access.
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
