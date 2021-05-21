import React from "react";

const Counter1 = ({count, incCount}) =>{
return (
    <button onClick={incCount}>{count}</button>
)
}

export default Counter1;