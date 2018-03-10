import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => {
  console.log("FilterLink mapStateToProps state:", state);
  console.log("FilterLink mapStateToProps ownProps:", ownProps);
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("FilterLink mapDispatchToProps dispatch:", dispatch);
  console.log("FilterLink mapDispatchToProps ownProps:", ownProps);
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
