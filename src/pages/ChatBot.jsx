import React from 'react'
import Card from '../components/Card'
import InputText from '../components/InputText'

function ChatBot() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#2C2E2E] text-gray-300 font-semibold w-1/2 '>
         <div className="text-center mb-6">
        <h1 className="text-4xl text-white font-bold m-2">Hello<span className="text-gray-500">User!</span></h1>
        <p className="text-white font-semibold m-2">I am a chatbot designed to recommend courses that can boost your productivity by 100%. Let me suggest the best course for you based on your needs.</p>
      </div>

      <div className="flex justify-center items-center text-lg p-2  w-3/4 rounded-full bg-[#353737] shadow-md">
  <select className="rounded-full bg-transparent border-none focus:outline-none">
    <option value="main">How we detect best course</option>
    <option value="vegetable">Vegetable</option>
    <option value="meat">Meat</option>
  </select>
</div>

      <div className=' items-center'>
      <div className='flex'>
        <Card 
            title="Lorem lorem lorem ?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card 
            title="Lorem lorem lorem ?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        </div>
        <div className='flex'>
        <Card 
            title="Lorem lorem lorem ?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            />
        <Card 
            title="Lorem lorem lorem ?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        </div>
      </div>
      <div>
        <InputText/>
      </div>
    </div>
  )
}

export default ChatBot