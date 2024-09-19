import React from "react";
import Inputbox from "../Inputbox/Inputbox";
import Button from "../Button/Button";
import './Todo.css'

function Todo({ handleInput, handleAdd, todoinput, myref }) {
    function onenter(event) {
        if (event.key === 'Enter') {
            handleAdd()
        }
    }
    return (
        <div className="input-add">
            <Inputbox onenter={onenter} ref={myref} handleInput={handleInput} todoinput={todoinput} placeholder={'Enter the data'} />
            <Button fn={handleAdd} handleAdd={handleAdd} value={'Add'}  />
        </div>
    )
}

export default Todo