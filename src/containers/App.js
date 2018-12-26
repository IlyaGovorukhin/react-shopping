import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clocksActions from '../actions/clocks';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (clocks, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(clocks, 'price', 'desc');
    case 'price_low':
      return orderBy(clocks, 'price', 'asc');
    case 'author':
      return orderBy(clocks, 'author', 'asc');
    default:
      return clocks;
  }
};

const filterClocks = (clocks, searchQuery) =>
  clocks.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchClocks = (clocks, filterBy, searchQuery) => {
  return sortBy(filterClocks(clocks, searchQuery), filterBy);
};

const mapStateToProps = ({ clocks, filter }) => ({
  clocks: clocks.items && searchClocks(clocks.items, filter.filterBy, filter.searchQuery),
  isReady: clocks.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clocksActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
