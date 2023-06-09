import React, { useState } from 'react';
import './colorBox.scss' 

function getRandomColor() {
    const ColorList = ['deeppink', 'green', 'red', 'blue', '#ccc', '#1c5']
    const randomIndex = Math.trunc(Math.random() * 5)
    return ColorList[randomIndex]
}

function ColorBox() {
    // const initColor = localStorage.getItem('colorBox') || 'deeppink'
    // const [color, setColor] = useState(initColor)

    // => sử dụng hàm callback để initColor chỉ bị render đúng 1 lần
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('colorBox') || 'deeppink'
        return initColor    
    })
 
    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor)

        localStorage.setItem('colorBox', newColor)
    }

    return (
        <div 
            className='color-box' 
            style={{backgroundColor: color}}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;