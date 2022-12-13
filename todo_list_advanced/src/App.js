import { Container } from '@mui/system';
import React from 'react';
import Projects from './Pages/Projects';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './Auth/Auth';
import PrivateRoute from './Router/PrivateRoute';

function App() {

  return (
<AuthProvider>
    <Router>
      <Container>
        <PrivateRoute exact path='/' component={Projects}></PrivateRoute>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;
