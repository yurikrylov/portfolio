import { Container } from '@mui/system';
import React from 'react';
import Home from './Components/Home';
import { BrowserRoute as Router, Route } from 'react-router-dom';
import { AuthProvider } from './Auth/Auth';
import PriveteRoute from './Router/PriveteRoute';

function App() {

  return (
<AuthProvider>
    <Router>
      <Container>
        <PriveteRoute exact path='/' component={Home}></PriveteRoute>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;
