import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  age: 18,
  loading: false,
  error: ""
};

function reducer(state, action) {
  switch (action.type) {

    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      };

    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload
      };

    case "SET_AGE":
      return {
        ...state,
        age: action.payload
      };

    case "SUBMIT":
      return {
        ...state,
        loading: true,
        error: ""
      };

    case "SUCCESS":
      return {
        ...state,
        loading: false
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

function UserForm() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.name || !state.email) {
      dispatch({
        type: "ERROR",
        payload: "Please fill all fields"
      });
      return;
    }

    dispatch({ type: "SUBMIT" });

    setTimeout(() => {
      dispatch({ type: "SUCCESS" });
      alert("Form submitted!");
    }, 1000);
  };

  return (
    <div>

      <h1>User Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "SET_NAME",
            payload: e.target.value
          })
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "SET_EMAIL",
            payload: e.target.value
          })
        }
      />

      <br /><br />

      <input
        type="number"
        value={state.age}
        onChange={(e) =>
          dispatch({
            type: "SET_AGE",
            payload: Number(e.target.value)
          })
        }
      />

      <br /><br />

      <button onClick={handleSubmit}>
        {state.loading ? "Submitting..." : "Submit"}
      </button>

      {state.error && (
        <p>{state.error}</p>
      )}

      <hr />

      <h3>User Details</h3>

      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Age: {state.age}</p>

    </div>
  );
}

export default UserForm;