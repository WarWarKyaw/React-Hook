import React, {useState, useEffect} from 'react';

function HookMouse(props) {
    const [x, setX]= useState(0)
    const [y, setY]= useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)
    },[])
    return (
        <div>
            Hook x-{x}, y-{y}
        </div>
    );
}

export default HookMouse;