import { useState } from 'react'
const creators=[
  {address:"0x",name:"test"}
]

function App() {
  
  
  return (
    <>
    <div>
    <h1 className='flex justify-center'>crypto onlyfans</h1>
    <p >get exclusive content</p>
     </div>
     {
      creators.map((creator)=>{
        return(
          
          <h1>{creator.name}</h1>
          
        )
      })
     }
    </>
  )
}

export default App
