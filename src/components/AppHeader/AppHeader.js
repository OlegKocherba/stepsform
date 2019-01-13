import React, {Fragment} from 'react';
import './AppHeader.scss'

import Progress from '../Progress/Progress';

const AppHeader = () => {
  return (
      <Fragment>
        <header className="app-header card-title text-center">
          <h4>Sign up</h4>
          <Progress/>
        </header>
      </Fragment>


  );
};

export default AppHeader;
