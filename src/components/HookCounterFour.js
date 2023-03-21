import React, {useState} from 'react';

function HookCounterFour(props) {
    const [items, setItem] = useState([])
    const addItem = () =>{
        setItem([...items, {
            id :items.length,
            value : Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>AddNumber</button>
            <ul>
                {
                    items.map( item =><li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    );
}

export default HookCounterFour;