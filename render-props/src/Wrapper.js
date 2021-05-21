import React, {useState} from "react";


const Wrapper = (props) =>{
  const  [count, setCount] = useState(0);
  const incCount = () => {
      setCount(prevCount => prevCount+1)
  }
    return (
        <div>
            {props.render(count, incCount)}
        </div>
    )

}


export default Wrapper;