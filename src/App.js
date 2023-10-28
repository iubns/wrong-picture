import logo from "./logo.svg"
import "./App.css"
import { useState } from "react"

function App() {
  const [isShow, setIsShow] = useState(new Array(9).fill(false))

  const clickPositions = [
    {
      x: 480,
      y: 810,
    },
    {
      x: 850,
      y: 890,
    },
    {
      x: 610,
      y: 690,
    },
    {
      x: 720,
      y: 670,
    },
    {
      x: 990,
      y: 670,
    },
    {
      x: 350,
      y: 780,
    },
    {
      x: 330,
      y: 880,
    },
    {
      x: 120,
      y: 900,
    },
    {
      x: 590,
      y: 900,
    },
  ]
  function click(index) {
    isShow[index] = true
    setIsShow([...isShow])
  }

  return (
    <div
      className="App"
      style={{
        position: "absolute",
        display: "flex",
      }}
    >
      <img src="/image.jpg" />

      {clickPositions.map((position, index) => (
        <img
          src="/circle.png"
          style={{
            width: "100px",
            height: "100px",
            position: "absolute",
            left: `${position.x - 30}px`,
            display: isShow[index] ? "flex" : "none",
            top: `${position.y - 30}px`,
          }}
        />
      ))}
      {clickPositions.map((position, index) => (
        <div
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onClick={() => click(index)}
        />
      ))}
      {clickPositions.map((position, index) => (
        <div
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y - 430}px`,
          }}
          onClick={() => click(index)}
        />
      ))}
      {clickPositions.map((position, index) => (
        <img
          src="/circle.png"
          style={{
            width: "100px",
            height: "100px",
            position: "absolute",
            left: `${position.x - 30}px`,
            display: isShow[index] ? "flex" : "none",
            top: `${position.y - 30 - 430}px`,
          }}
        />
      ))}
    </div>
  )
}

export default App
