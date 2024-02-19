import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Color, setColor] = useState('green')

  function changeColor() {
    setColor('yellow')

  }

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{ backgroundColor: Color }}>
        <div className="fixed flex-wrap justify-center  bottom-12 inset-x-0 px-2">
          <div className="flex flex-col items-center justify-end h-full">
            <div className="flex flex-wrap justify-center w-48 gap-3 shadow-lg py-2 rounded-3xl">
              <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-red-500'>Red</button>
              <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-blue-500'>Blue</button>
              <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-pink-500'>Pink</button>
              <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full shadow-lg text-white bg-yellow-500'>Yellow</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
