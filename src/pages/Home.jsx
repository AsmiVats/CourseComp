import React from 'react'
import Compare from './Compare'
import ChatBot from './ChatBot'

function Home() {
  return (
    <div className='flex'>
        <Compare/>
        <ChatBot/>
    </div>
  )
}

export default Home