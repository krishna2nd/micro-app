import React from 'react';

import { H4 } from 'src/components/shared/typography';
import Sort from './sort';
import commonStyles from 'src/components/shared/common.styles.css';

const Header = () => {
  return (
    <div className={commonStyles.twoColContainer}>
      <H4 primary>Tus pedidos anteriores</H4>
      <Sort />
    </div>
  );
};

export default Header;
