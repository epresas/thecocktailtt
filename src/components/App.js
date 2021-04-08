import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Hotel from './pages/Hotel/Hotel'
import Drinks from './pages/Drinks/Drinks'

const App = () => {
  // return (
  //   <div style={{background: 'red'}} className='grid'>
  //     <div className='grid__row'>
  //       <div style={{background: 'blue'}} className='grid__col-3 grid__col-sm-6'> 3 cols</div>
  //       <div style={{background: 'yellow'}} className='grid__col-3 grid__col-sm-6'> 3 cols</div>
  //       <div style={{background: 'grey'}} className='grid__col-3 grid__col-sm-6'> 3 cols</div>
  //       <div style={{background: 'brown'}} className='grid__col-3'> 3 cols</div>
  //     </div>
  //     <div className='grid__row'>
  //       <div style={{background: 'blue'}} className='grid__col-4'> 4 cols</div>
  //       <div style={{background: 'yellow'}} className='grid__col-4'> 4 cols</div>
  //       <div style={{background: 'grey'}} className='grid__col-4'> 4 cols</div>
  //     </div>
  //   </div>
  // );
  return(
    <Switch>
      <Route path="/" component={Hotel} exact />
      <Route path="/hotel" component={Hotel} />
      <Route path='/drinks' component={Drinks} />
    </Switch>
  )

}

// https://github.com/diegohaz/arc

export default App;