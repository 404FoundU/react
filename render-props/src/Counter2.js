
import React from "react";

const Counter2 = ({count, incCount}) =>{
    return (
        <button onClick={incCount}>{count}</button>
    )
}

export default Counter2;