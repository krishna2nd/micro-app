import React, { PureComponent } from 'react';
import Lists from './lists';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getLists,
  deleteList,
  showCreateListModal,
  showDeleteListModal
} from 'src/components/list/list.actions';
import {
  getMyLists,
  hasErrors,
  isFetching
} from 'src/components/list/list.selectors';

class ListContainer extends PureComponent {
  componentDidMount() {
    this.props.onGetLists();
  }
  render() {
    return <Lists {...this.props} />;
  }
}

const mapStateToProps = state => ({
  lists: getMyLists(state),
  hasErrors: hasErrors(state),
  isFetching: isFetching(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onGetLists: getLists,
      onDeleteList: deleteList,
      onShowCreateListModal: showCreateListModal,
      onShowDeleteListModal: id => showDeleteListModal(id)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
