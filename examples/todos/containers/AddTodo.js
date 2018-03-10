import AddTodoForm from "../components/AddTodoForm";

import { connect } from "react-redux";
import { addTodo } from "../actions";

// map dispatch action to props.
// AddTodoForm props will contain onSubmit property.
const mapDispatchToProps = dispatch => {
  console.log("addTodo mapDispatchToProps");
  return {
    onSubmit: text => {
      dispatch(addTodo(text));
    }
  };
};

// form is AddTodoForm which has a onSubmit property.
let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddTodo;
