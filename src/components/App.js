import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Hotel from './pages/Hotel/Hotel'
import Drinks from './pages/Drinks/Drinks';

const App = () => {
  return(
    <Switch>
      <Route path="/hotel" component={Hotel} />
      <Route path='/drinks' component={Drinks} />
      <Route path="/" exact component={Hotel} />
      <Redirect to='/'/>
    </Switch>
  )
}

export default App;