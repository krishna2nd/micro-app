import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

import { H5 } from 'src/components/shared/typography';
import Order from './order';
import Empty from 'src/components/shared/empty';
import addressEmpty from 'src/assets/images/addresses-empty.svg';
import { HOME_PATH } from 'src/components/app/app.constants';
import { ORDER_TITLES } from '../orders.constants';

const OrderList = ({ orders }) => {
  if (!isEmpty(orders)) {
    return map(orders, (orderGroup, orderGroupState) => (
      <div>
        <H5>{ORDER_TITLES[orderGroupState]}</H5>

        {orderGroup.map(order => (
          <Order {...order} />
        ))}
      </div>
    ));
  }

  return (
    <Empty
      image={addressEmpty}
      text={'Aún no tienes pedidos'}
      url={HOME_PATH}
      urlText={'Empezar a comprar'}
    />
  );
};

export default OrderList;
