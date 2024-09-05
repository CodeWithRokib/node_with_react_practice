import { useState } from "react";

const UseStated = () => {

    const [count, setCount] = useState(0);

    const handleClick=()=>{
        setCount(()=>count+1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>INcreament</button>
    </div>
  )
}

export default UseStated