import React from "react";

let AddTodoForm = ({ onSubmit }) => {
  let input;
  // console.log(props);
  // const onSubmit = props.onSubmit;
  // console.log("this.props", this.props);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          /*
          when we call onSubmit. It is really call addTodo.
          */
          onSubmit(input.value);
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
