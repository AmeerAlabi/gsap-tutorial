import React from 'react'
import {motion, spring} from 'framer-motion'

function Basics() {
  return (
    <>
    <motion.div
    initial={{
        rotate :  "0deg",
    }}
    animate={{
        rotate: "360deg"
    }}
    transition={{
        duration:1,
        ease : "backInOut"
    }}
    >
      <div className=' w-[150px] h-[150px] bg-black m-auto mt-10 '>
    </div>
      </motion.div>

    <motion.button 
    className=' mt-6 bg-blue-800 text-white w-[125px] h-[45px] p-2'
    whileTap={{scale:0.85 , rotate:"-2.5deg"}}
    transition={{
        duration : 0.125 , 
        ease : "easeInOut"
    }}
    >
Click Me 
    </motion.button>
      </>
  )
}

export default Basics
