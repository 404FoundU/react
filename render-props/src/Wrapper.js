import React, {useState} from "react";


const Wrapper = (props) =>{
  const  [count, setCount] = useState(props.count);

    return (
        <div>
            <button onClick={()=>setCount(prevCount => prevCount+1)}>{count}</button>
        </div>
    )

}


export default Wrapper;