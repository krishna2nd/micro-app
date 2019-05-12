import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFavorites } from 'src/components/favorites/favorites.actions';
import {
  getFavoritesFiltered,
  getFetching,
  isFavoritesEmpty,
  getSortOptions,
  getFavoritesListId
} from 'src/components/favorites/favorites.selectors';
import { profileId } from 'src/components/user/user.selectors';
import Favorites from './favorites';

const mapStateToProps = (state, ownProps) => ({
  products: getFavoritesFiltered(state),
  isFetching: getFetching(state),
  isEmpty: isFavoritesEmpty(state),
  sortOptions: getSortOptions(state),
  profileId: profileId(state),
  favoritesId: getFavoritesListId(state)
});

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      onFetchFavorites: fetchFavorites
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
