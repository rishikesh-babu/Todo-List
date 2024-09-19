import React from "react";
import Button from "../Button/Button";
import './Todolist.css'

function Todolist({ element, index, handleDone, handleDelete, }) {
    return (
        <div className="todolist">
            <p className={`${element.done ? 'element-done' : ''}`}>{index + 1}. {element.label} </p>
            <Button fn={handleDelete} handleDelete={handleDelete} index={index} value={'Delete'} />
            <Button fn={handleDone} handleDone={handleDone} index={index} value={'Done'} />
        </div>
    )
}

export default Todolist