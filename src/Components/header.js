import React from 'react';

import './header.css';
import Logo from './icon.png';
import { Header } from 'semantic-ui-react';

function header() {
  return (
    <div>
      <img alt="logo" src={Logo} width="100" height="100" />

      <Header as="h1" icon color="pink" textAlign="center">
        Chat Whatever You Want
      </Header>
    </div>
  );
}
export default header;
