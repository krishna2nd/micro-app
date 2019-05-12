import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import truncate from 'lodash/truncate';

import NavLink from 'src/components/shared/nav-link';
import NarrowLayout from 'src/components/shared/layout/narrow';
import ProfileNav from 'src/components/account/components/nav/profile-nav';
import { H5, P } from 'src/components/shared/typography';
import Link from 'src/components/shared/link';
import { stringifyAddress } from 'src/components/addresses/addresses.utils';
import {
  ACCOUNT_ADDRESSES_PATH,
  EDIT_PROFILE_PATH,
  EDIT_EMAIL_PATH,
  EDIT_TELEPHONE_PATH,
  EDIT_ASSOCIATE_PATH
} from 'src/components/app/app.constants';

import styles from './summary.styles.css';

export default ({
  profileDetails: {
    fullName,
    email,
    gender,
    countryCode,
    phoneNumber,
    mobileNumber,
    dateOfBirth,
    joinDate,
    associateNumber,
    associateStore
  },
  primaryAddress,
  location: { pathname }
}) => {
  if (!email) return null;

  const renderProfileForm = () => (
    <div class={styles.card}>
      <H5>Datos personales</H5>

      <div className={styles.body}>
        {fullName && (
          <div>
            <P secondary small>
              Nombre
            </P>
            <P>{truncate(fullName, 30)}</P>
          </div>
        )}

        {dateOfBirth && (
          <div>
            <P secondary small>
              Fecha de nacimiento
            </P>
            <P>{dateOfBirth}</P>
          </div>
        )}

        {gender && (
          <div>
            <P secondary small>
              Género
            </P>
            <P>{gender}</P>
          </div>
        )}
      </div>

      <NavLink blue to={EDIT_PROFILE_PATH}>
        Editar
      </NavLink>
    </div>
  );

  const renderAccountForm = () => (
    <div class={styles.card}>
      <H5>Datos de inicio de sesión</H5>

      <div className={styles.body}>
        <div>
          <P secondary small>
            Correo electrónico
          </P>
          <P>{email}</P>
        </div>

        <div>
          <P secondary small>
            Contraseña
          </P>
          <P>************</P>
        </div>
      </div>

      <NavLink blue to={EDIT_EMAIL_PATH}>
        Editar
      </NavLink>
    </div>
  );

  const renderTelephoneForm = () => {
    return (
      <div className={styles.card}>
        <H5>Número de teléfono</H5>

        <div className={styles.body}>
          {mobileNumber && (
            <div>
              <P secondary small>
                Telefóno principal
              </P>
              <P>
                {countryCode} {mobileNumber}
              </P>
            </div>
          )}

          {phoneNumber && (
            <div>
              <P secondary small>
                Fijo
              </P>
              <P>{phoneNumber}</P>
            </div>
          )}
        </div>

        <NavLink blue to={EDIT_TELEPHONE_PATH}>
          Editar
        </NavLink>
      </div>
    );
  };

  const renderAssociateForm = () => (
    <div className={styles.card}>
      <H5>Datos de asociado</H5>

      <div className={styles.body}>
        {associateNumber && (
          <div>
            <P secondary small>
              Numero de asociado
            </P>
            <P>{associateNumber}</P>
          </div>
        )}

        {associateStore && (
          <div>
            <P secondary small>
              Determinante
            </P>
            <P>{associateStore}</P>
          </div>
        )}

        {joinDate && (
          <div>
            <P secondary small>
              Fecha de ingreso
            </P>
            <P>{joinDate}</P>
          </div>
        )}
      </div>

      <NavLink blue to={EDIT_ASSOCIATE_PATH} className={styles.associate}>
        Editar
      </NavLink>
    </div>
  );

  const renderAddressForm = () => (
    <div className={styles.card}>
      <H5>Direcciones</H5>

      <div className={styles.body}>
        {primaryAddress && (
          <div>
            <P secondary small>
              {primaryAddress.addressNickName}
            </P>
            <P>{stringifyAddress(primaryAddress)}</P>
          </div>
        )}
      </div>

      <NavLink blue to={ACCOUNT_ADDRESSES_PATH}>
        Administrar direcciones
      </NavLink>
    </div>
  );

  return (
    <div>
      <ProfileNav pathname={pathname} />

      <NarrowLayout>
        <Row className={styles.summaryCardList}>
          {[
            renderProfileForm,
            renderAddressForm,
            renderAccountForm,
            renderTelephoneForm,
            associateNumber ? renderAssociateForm : null
          ].map(
            cardRenderer =>
              cardRenderer && (
                <Col xs={12} md={6} className={styles.colItem}>
                  {cardRenderer()}
                </Col>
              )
          )}

          {!associateNumber && (
            <Link to={EDIT_ASSOCIATE_PATH} className={styles.associateLink}>
              Trabajo en Walmart >
            </Link>
          )}
        </Row>
      </NarrowLayout>
    </div>
  );
};
