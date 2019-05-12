import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'react-router-redux';
import classnames from 'classnames';

import { ACCOUNT_PROFILE_PATH } from 'src/components/app/app.constants';
import NavLink from 'src/components/shared/nav-link';
import { Icon, ICONS } from 'src/components/shared/icon';
import Button from 'src/components/shared/button';
import { nav, backNav, backNavLabel } from './nav.styles.css';

const BackNav = ({
  to = ACCOUNT_PROFILE_PATH,
  goBackRouter,
  onGoBack,
  children
}) => {
  if (goBackRouter)
    return (
      <nav className={classnames(nav, backNav)}>
        <Button link onClick={onGoBack}>
          <Icon icon={ICONS.LEFT} /> Regresar
        </Button>
      </nav>
    );
  return (
    <nav className={classnames(nav, backNav)}>
      <NavLink blue to={to} gaValue={to}>
        <span className={backNavLabel}>
          <Icon icon={ICONS.LEFT} /> Regresar
        </span>
      </NavLink>
      {children}
    </nav>
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    {
      onGoBack: goBack
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackNav);
