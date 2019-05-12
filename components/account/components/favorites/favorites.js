import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'src/components/shared/button';
import ProductGrid from 'src/components/products/components/grid';
import NarrowLayout from 'src/components/shared/layout/narrow';
import ProfileNav from 'src/components/account/components/nav/profile-nav';
import { H4 } from 'src/components/shared/typography';
import favoritesEmpty from 'src/assets/images/favorites-empty.svg';
import Empty from 'src/components/shared/empty';
import Sort from './components/sort';
import styles from './favorites.styles.css';
import commonStyles from 'src/components/shared/common.styles.css';
import { PAGINATION_SIZE } from 'src/components/list/list.constants';

class Favorites extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      paginationSize: PAGINATION_SIZE
    };
    this.handleClickLoadMore = this.handleClickLoadMore.bind(this);
  }
  componentWillMount() {
    const { onFetchFavorites } = this.props;

    onFetchFavorites();
  }

  componentWillReceiveProps({ favoritesId }) {
    if (favoritesId && this.props.favoritesId !== favoritesId)
      this.props.onFetchFavorites();
  }

  handleClickLoadMore() {
    const { onFetchFavorites } = this.props;
    const paginationSize = this.state.paginationSize + PAGINATION_SIZE;

    if (onFetchFavorites) {
      this.setState({ paginationSize });
      onFetchFavorites(paginationSize);
    }
  }

  renderFavorites() {
    const { products, sortOptions } = this.props;

    return (
      <div>
        <div
          className={classnames(commonStyles.twoColContainer, styles.header)}
        >
          <H4 primary>Tus favoritos</H4>
          <Sort sortOptions={sortOptions} />
        </div>

        <ProductGrid products={products} />

        <div className={styles.loadMoreBtn}>
          <Button primary onClick={this.handleClickLoadMore}>
            Mostrar más
          </Button>
        </div>
      </div>
    );
  }

  renderEmpty() {
    return (
      <Empty
        image={favoritesEmpty}
        text={
          'Aún no tienes favoritos. Compra en la página o haz clic en el corazón para agregar productos.'
        }
        url={'/'}
        urlText={'Comenzar'}
      />
    );
  }

  render() {
    const {
      location: { pathname },
      isEmpty
    } = this.props;

    return (
      <div>
        <ProfileNav pathname={pathname} />

        <NarrowLayout noMargin>
          {isEmpty ? this.renderEmpty() : this.renderFavorites()}
        </NarrowLayout>
      </div>
    );
  }
}

export default Favorites;

Favorites.propTypes = {
  products: PropTypes.object.isRequired
};
