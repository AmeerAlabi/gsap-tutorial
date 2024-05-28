import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TweenMax , Power3 } from 'gsap/gsap-core'
import Basics from './Basics'

function App() {
  
 
  return (
    <>
    {/* <div>
      <img src={reactLogo} alt=""  className='  w-[230px] m-auto mt-6 '/>
      <p className= ' text-center text-[18px] mt-2 '>Lorem ipsum dolor sit amet consectetur.</p>
    </div> */}

    <Basics />
    </>
  )
}

export default App
