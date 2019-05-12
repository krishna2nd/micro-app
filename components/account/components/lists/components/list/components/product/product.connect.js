import { connect } from 'react-redux';

import { product } from 'src/components/product/product.selectors';
import Product from './product';
import { centerPointId as storeId } from 'src/components/store/store.selectors';

const mapStateToProps = (state, props) => {
  const { id } = props;

  return {
    product: {
      ...props,
      ...product(state, `${id}_${storeId(state)}`)
    }
  };
};

export default connect(mapStateToProps)(Product);
