import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
    <div className='h-screen w-full'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'>
          <button
          onClick={() => setColor("Red")} 
          className='outline-none px-4 py-2 rounded-lg text-white'
          style={{backgroundColor: "Red"}}>
            Red
          </button>
          <button 
          onClick={() => setColor("olive")}
          className='outline-none px-4 py-2 rounded-lg text-white'
          style={{backgroundColor: "olive"}}>
            olive
          </button>
          <button 
          onClick={() => setColor("Yellow")}
          className='outline-none px-4 py-2 rounded-lg text-white'
          style={{backgroundColor: "Yellow"}}>
            Yellow
          </button>
          <button 
          onClick={() => setColor("Pink")}
          className='outline-none px-4 py-2 rounded-lg text-white'
          style={{backgroundColor: "Pink"}}>
            Pink
          </button>
          <button 
          onClick={() => setColor("Blue")}
          className='outline-none px-4 py-2 rounded-lg text-white'
          style={{backgroundColor: "Blue"}}>
            Blue
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
