import React , {useState} from 'react';

function HookCouner(props) {

  const [count, setCount] = useState(1)
  console.log(count, setCount)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> Count {count}</button>
        </div>
    );
}

export default HookCouner;