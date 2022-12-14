import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Projects from './Pages/Projects';
import Tasks from './Pages/Tasks';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import { Container } from '@mui/system';

function App() {

  return (
      <Router>
        <Container>
          <Route exact path='/' component={Projects}></Route>
          <Route exact path='/tasks' component={Tasks}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={SignUp}></Route>
        </Container>
      </Router>
  );
}

export default App;
