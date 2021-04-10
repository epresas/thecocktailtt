import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Hotel from './pages/Hotel/Hotel'
import Drinks from './pages/Drinks/Drinks';

const App = () => {
  return(
    <Switch>
      <Route path="/" component={Hotel} exact />
      <Route path="/hotel" component={Hotel} />
      <Route path='/drinks' component={Drinks} />
    </Switch>
  )
}

export default App;