import React from 'react';
import values from 'lodash/values';
import { Row } from 'react-flexbox-grid';

import listEmpty from 'src/assets/images/lists-empty.svg';
import Empty from 'src/components/shared/empty';
import NarrowLayout from 'src/components/shared/layout/narrow';
import NavLink from 'src/components/shared/nav-link';
import Button from 'src/components/shared/button';
import ProfileNav from 'src/components/account/components/nav/profile-nav';
import { P, H3, H5 } from 'src/components/shared/typography';
import styles from './lists.styles.css';
import commonStyles from 'src/components/shared/common.styles.css';
import { ACCOUNT_LISTS_PATH } from 'src/components/app/app.constants';

const List = ({ name, date, size, id, onShowDeleteListModal }) => (
  <div className={styles.card}>
    <div className={styles.body}>
      <div>
        <H5 inline>{name}</H5>
        <P secondary inline>
          {size} {size !== 1 ? 'Artículos' : 'Artículo'}
        </P>
      </div>
      <P secondary>Creada el {date}</P>
    </div>

    <div className={styles.actions}>
      <Button link onClick={() => onShowDeleteListModal(id)}>
        <P secondary small>
          Eliminar
        </P>
      </Button>

      <NavLink blue to={`${ACCOUNT_LISTS_PATH}/${id}`}>
        Ver detalles
      </NavLink>
    </div>
  </div>
);

const Lists = ({
  hasErrors,
  location: { pathname },
  lists,
  onShowCreateListModal,
  ...rest
}) => (
  <div className={commonStyles.container}>
    <ProfileNav pathname={pathname} />
    <Row xs={12} md={6} />

    <NarrowLayout>
      {values(lists).length > 0 && !hasErrors ? (
        <div>
          <div className={styles.header}>
            <H3 primary>Tus listas</H3>
            <Button
              className={styles.addList}
              secondary
              onClick={onShowCreateListModal}
            >
              Crear lista
            </Button>
          </div>

          {values(lists).map(list => (
            <List {...list} {...rest} />
          ))}
        </div>
      ) : (
        <Empty
          image={listEmpty}
          text={'Aún no tienes una lista'}
          onClick={onShowCreateListModal}
          urlText={'Crear lista'}
        />
      )}
    </NarrowLayout>
  </div>
);

export default Lists;
