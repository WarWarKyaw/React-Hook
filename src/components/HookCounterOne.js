import React, {useEffect, useState} from 'react';

function HookCounterOne(props) {
    const [count , setCount]=useState(0)
    const [name , setName]=useState('')
    useEffect(()=> {
        console.log('useEffect-updating Document')
        document.title =`You Clicked ${count}times`
    },[count])
    return (
        <div>
            <input type='text' value={name} onChange={ e =>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    );
}

export default HookCounterOne;