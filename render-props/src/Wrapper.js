import React, {useState} from "react";


const Wrapper = () =>{
  const  [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=>setCount(prevCount => prevCount+1)}>{count}</button>
        </div>
    )

}


export default Wrapper;