import React, { Component } from 'react';

import { nav, profileNav } from './nav.styles.css';
import NavLink from 'src/components/shared/nav-link';
import classnames from 'classnames';
import Logout from 'src/components/account/components/logout';
import {
  ACCOUNT_PROFILE_PATH,
  ACCOUNT_ADDRESSES_PATH,
  ACCOUNT_ORDERS_PATH,
  ACCOUNT_FAVORITES_PATH,
  ACCOUNT_LISTS_PATH,
  ACCOUNT_PREFERENCES_PATH
} from 'src/components/app/app.constants';

const tabs = [
  { to: ACCOUNT_PROFILE_PATH, text: 'Tu perfil' },
  { to: ACCOUNT_ADDRESSES_PATH, text: 'Tus direcciones' },
  { to: ACCOUNT_ORDERS_PATH, text: 'Tus pedidos anteriores' },
  { to: ACCOUNT_FAVORITES_PATH, text: 'Tus favoritos' },
  { to: ACCOUNT_LISTS_PATH, text: 'Tus listas' },
  { to: ACCOUNT_PREFERENCES_PATH, text: 'Preferencias' }
];

class ProfileNav extends Component {
  render() {
    const { pathname } = this.props;

    return (
      <nav className={classnames(nav, profileNav)}>
        {tabs.map(({ to, text }) => (
          <NavLink to={to} pathname={pathname} gaValue={text}>
            {text}
          </NavLink>
        ))}
        <Logout />
      </nav>
    );
  }
}
export default ProfileNav;
