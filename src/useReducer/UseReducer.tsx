import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const initialState: State = {
  count: 0,
};

class Dog{
    bark(){
        console.log("Woof!");
    }
}

class Cat{
    meow(){
        console.log("Meow!");
    }
}


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Form handling usereducer

type FormState = {
  name: string;
  email: string;
};

type FormAction =
  | { type: "setName"; payload: string }
  | { type: "setEmail"; payload: string };

const initialState1: FormState = {
  name: "",
  email: "",
};
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export const Form: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name:${state.name},Email:${state.email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "setName", payload: e.target.value })
          }
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "setEmail", payload: e.target.value })
          }
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};





const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

//   Event handling
// -----------------
// 1.Basic Event Handling (onclick,onChnage) 
//  2.Passing parameters to Event Handlers 
//  const handleClick=(message:string)=>{
//     alert(message);
//  }



// 3.synthetic Events
// 4.event types in ts =>React.MouseEvent (onClick,onMouseOver) ,React.changeEvent (onChange), React.KeyboardEvent(onKeyDown,onKeyPress)
 
// Event Propagation
// const handleParentClick=()=>{
//     alert('Parent clicked!');
// };

// const handleChildClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
//     e.stopPropagation();
//     alert('child clicked');
// };


// 5. Combining Multiple Event Handlers

// const logClick=()=>{
//     console.log("Button Clicked");

// };

// const showAlert=()=>{
//     alert('Alert triggered');
// }

// 6.Dynamic event handlers



// typeof Type Guards
// ----------------------
function printValue(value:string | number){
    if(typeof value === "string"){
        console.log("String value:",value.toUpperCase());
    }else if(typeof value=== "number"){
        console.log("Number value:",value.toFixed(2))
    }
}

console.log(printValue("Hello"));
console.log(printValue(2));

// instanceof Type Guards
// ______________________
function makeSound(animal:Dog |Cat){
    if(animal instanceof Dog){
        animal.bark();
    }else if(animal instanceof Cat){
        animal.meow();
    }
}
console.log(makeSound(new Dog()));
console.log(makeSound(new Cat()));


  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div style={{ margin: "10px" }}>
        <Form />
      </div>


      {/* <button onClick={() => handleClick('Hello, React!')}>Click Me</button> */}

      {/* <div onClick={handleParentClick}>
        <button onClick={handleParentClick}>Click parent</button>
        <button onClick={handleChildClick}>Click me</button>
      </div> */}

      {/* <div>
        <button onClick={()=>{logClick();showAlert();}}>Click me</button>
      </div> */}
<div>


</div>
      
    </div>
  );
};
export default Counter;
