import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import Todo from "./components/Todo"

function App() {

    const [todo, setTodo] = useState("")

    const [todos, setTodos] = useState([])

    return (
        <div className={"container w-100 h-100 d-flex flex-column gap-3 p-5"}>
            <h2>Add Todo</h2>
            <div className={"d-flex gap-3"}>
                <input className={"form-control w-75"} type="text" value={todo} placeholder={"Write something.."} onChange={event => {
                    let value = event.target.value;

                    value = value.trimLeft()

                    setTodo(value)
                }}/>
                <button className={"btn btn-outline-primary w-25"} type={"submit"} onClick={() => {
                    if (todo !== ""){
                        setTodos([...todos, todo])
                    }

                    setTodo("")
                }}>Add</button>
            </div>
            {todos.length !== 0 &&
            <div className={"container w-100 h-auto d-flex flex-column bg-light p-5 gap-3 rounded overflow-auto"}>
                {todos.map((todo, key) => (
                    <Todo key={key} index={key} todo={todo}></Todo>
                ))}
            </div>
            }
        </div>
    );
}

export default App;
