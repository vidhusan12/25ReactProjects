import React, { useEffect } from 'react'
import { useState } from 'react'
import './colorStyles.css'

const randomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor);

  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor])

  return (
    <>
      <div className='color-wrapper' style={{ background: color }}>
        <h1 style={{
          fontSize: '30px',
          marginRight: '20px',
          color: 'black'
        }}>Generate Random Color</h1>
        <button onClick={() => { setTypeOfColor('hex'); handleCreateRandomHexColor(); }}>Create HEX Color</button>
        <button onClick={() => { setTypeOfColor('rgb'); handleCreateRandomRgbColor(); }}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Random Color</button>
        <h3>{typeOfColor === "rgb" ? "RGB Color " : "HEX Color "} {color}</h3>
      </div>
    </>
  )
}

export default randomColor