import React, { Component } from 'react';

import listEmpty from 'src/assets/images/empty-list.svg';
import Empty from 'src/components/shared/empty';
import NarrowLayout from 'src/components/shared/layout/narrow';
import BackNav from 'src/components/account/components/nav/back-nav';
import Button from 'src/components/shared/button';
import Product from './components/product';
import styles from './list.styles.css';
import commonStyles from 'src/components/shared/common.styles.css';
import { H3, P } from 'src/components/shared/typography';
import { HOME_PATH } from 'src/components/app/app.constants';
import { PAGINATION_SIZE } from 'src/components/list/list.constants';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = { paginationSize: PAGINATION_SIZE };
    this.handleClickLoadMore = this.handleClickLoadMore.bind(this);
  }

  componentDidMount() {
    this.props.onGetList();
    this.handleRemoveAllFromList = this.handleRemoveAllFromList.bind(this);
    this.handleAddAllToCart = this.handleAddAllToCart.bind(this);
  }

  handleRemoveAllFromList() {
    const items = this.props.products.map(({ repositoryId }) => repositoryId);
    this.props.onRemoveProductsFromList(items);
  }

  handleAddAllToCart() {
    const { products, onAddProductsToCart } = this.props;
    onAddProductsToCart(products);
  }

  handleClickLoadMore() {
    const { onGetList } = this.props;
    const paginationSize = this.state.paginationSize + PAGINATION_SIZE;

    if (onGetList) {
      this.setState({ paginationSize });
      onGetList({ paginationSize });
    }
  }

  renderActions() {
    const { pristine, submitting } = this.props;

    return (
      <div className={styles.actions}>
        <P
          secondary
          className={styles.deleteAll}
          onClick={this.handleRemoveAllFromList}
        >
          Eliminar todo
        </P>
        <Button
          primary
          block
          disabled={pristine || submitting}
          onClick={this.handleAddAllToCart}
        >
          Agregar todo al carrito
        </Button>
      </div>
    );
  }

  render() {
    const { list = {}, products, onRemoveProductsFromList } = this.props;
    const { name, date } = list;
    return (
      <div className={commonStyles.container}>
        <BackNav goBackRouter />

        <NarrowLayout>
          <H3 primary>{name}</H3>
          <P secondary>Creada el {date}</P>

          {products.length > 0 ? (
            <div class={styles.body}>
              {this.renderActions()}
              {products.map(product => (
                <Product
                  {...product}
                  onRemoveProductsFromList={onRemoveProductsFromList}
                />
              ))}
              {this.renderActions()}
              {products.length >= PAGINATION_SIZE && (
                <div className={styles.loadMoreBtn}>
                  <Button primary onClick={this.handleClickLoadMore}>
                    Mostrar más
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Empty
              image={listEmpty}
              text={
                'Crea una lista con tus productos preferidos y ahorra tiempo en tu próxima compra'
              }
              url={HOME_PATH}
              urlText={'Comenzar'}
            />
          )}
        </NarrowLayout>
      </div>
    );
  }
}

export default List;
