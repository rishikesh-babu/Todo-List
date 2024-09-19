// import React from "react";
// import './Inputbox.css'

// const Inputbox = () => ({ placeholder, handleInput, todoinput, ref }) {
//     return(
//         <input ref={ref} placeholder={placeholder} onChange={handleInput} value={todoinput} type="text" />
//     )
// }

// export default Inputbox

import React, { forwardRef } from "react"; //
import './Inputbox.css';

// Use forwardRef to allow the ref to be forwarded to the input element
const Inputbox = forwardRef(({ placeholder, handleInput, todoinput, onenter }, ref) => {
    return (
        <input onKeyDown={onenter} ref={ref} placeholder={placeholder} onChange={handleInput} value={todoinput} type="text" />
    );
});

export default Inputbox;
