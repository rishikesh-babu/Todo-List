import React from "react";
import './Button.css'

function Button({ value,index, fn }) { //  handleAdd, handleDone, handleDelete, 

    // function handle() {
    //     if (value === 'Add') {
    //         handleAdd();
    //     } else if (value === 'Done') {
    //         handleDone(index);
    //     } else if (value === 'Delete') {
    //         handleDelete(index);
    //     }
    // }

    return (
        <button className="button" onClick={() => fn && fn(index)}>{value ?? 'Click'} </button>
    )
}

export default Button