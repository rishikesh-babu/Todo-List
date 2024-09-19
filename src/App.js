import { useEffect, useRef, useState } from 'react';
import './App.css';
import Todo from './Component/Todo/Todo';
import Todolist from './Component/Todolist/Todolist';
import Button from './Component/Button/Button';
import Inputbox from './Component/Inputbox/Inputbox';

function App() {
    const [todoinput, settodoinput] = useState('')
    const [todolist, settodolist] = useState([])
    const myref = useRef(null)

    useEffect(() => {
        myref.current.focus()
    },[])
    function dofocus() {
        console.log(myref);
        myref.current.focus()
    }
    function handleInput(event) {
        settodoinput(event.target.value)
    }
    function handleAdd() {
        settodolist([...todolist, { label: todoinput, done: false }])
        settodoinput('')
        myref.current.focus();
        console.log(...todolist)
    }
    function handleDone(index) {
        const temp = [...todolist]
        temp[index].done = true
        settodolist(temp)
        console.log(...todolist)
    }
    function handleDelete(index) {
        const temp = [...todolist]
        console.log('Delete item', temp[index]);
        temp.splice(index, 1)
        settodolist(temp) 
    }
    
    // function sample(index) {
    //     const temp = [...todolist]
    //     temp[index].done = true
    //     settodolist(temp)
    //     console.log(...todolist)
    //     console.log(temp[index])
    // }

    return (
        <div className="App">
            <h1 className='heading'>To Do List</h1>
            <Todo myref={myref} handleAdd={handleAdd} todoinput={todoinput} handleInput={handleInput} />
            <div className="todolist-container">
                {todolist.map((element, index) => <Todolist handleDelete={handleDelete} handleDone={handleDone} element={element} index={index} key={index} />)}
            </div>
        </div>
    );
}

export default App;
