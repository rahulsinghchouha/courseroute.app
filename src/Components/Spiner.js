import React from 'react'
import './spiner.css'

const Spiner = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      <div className="flex flex-col items-center space-y-2 spiner"></div>
      <p className="text-bgDark text-lg font-semibold">Loading....</p>
    </div>
  )
}

export default Spiner;
