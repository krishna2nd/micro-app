/* === LIBRARIES === */
import React, { Component } from 'react';

import Button from 'src/components/shared/button';

class Logout extends Component {
  render() {
    const { onLogout, profileName } = this.props;

    return (
      profileName && (
        <Button link onClick={onLogout}>
          Cerrar sesión
        </Button>
      )
    );
  }
}

export default Logout;
