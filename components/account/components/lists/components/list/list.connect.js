import { connect } from 'react-redux';
import List from './list';

import {
  getList,
  addListProductsToCart,
  removeProductsFromList
} from 'src/components/list/list.actions';

import { list, products } from 'src/components/list/list.selectors';
import { addProductsToCart } from 'src/components/cart/cart.actions';

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  list: list(state, id),
  products: products(state, id)
});

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { id }
    }
  }
) => ({
  onGetList: options => dispatch(getList(id, options)),
  onRemoveProductsFromList: items =>
    dispatch(removeProductsFromList(id, items)),
  onSubmit: () => dispatch(addListProductsToCart(id)),
  onAddProductsToCart: products => dispatch(addProductsToCart(products))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
