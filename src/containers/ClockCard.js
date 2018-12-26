import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import ClockCard from '../components/ClockCard';

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, clock) => count + (clock.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClockCard);
