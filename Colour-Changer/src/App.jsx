import { useState } from 'react'

function App() {
  const [color,setColor] = useState("Green");

return (
  <>
   <div className="w-full h-screen duration-200 "
   style={{backgroundColor:color}}></div>
   <div className=" fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-70 m-7s"> 
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl">
       <button onClick={()=> setColor("red")}
        className="outline-none rounded-full px-5 py-1 shadow-md hover:shadow-red-500/50 transition-shadow duration-300" 
        style={{background:"red"}}>red</button>
        <button onClick={()=> setColor("yellow")}
         className="outline-none rounded-full px-5 shadow-md hover:shadow-red-500/50 transition-shadow duration-300" style={{background:"yellow"}}>yellow</button>

       <button onClick={()=> setColor("blue")}  
        className="outline-none rounded-full px-5 shadow-md hover:shadow-red-500/50 transition-shadow duration-300" style={{background:"blue"}}>blue</button>

       <button onClick={()=> setColor("pink")}  
       className="outline-none rounded-full px-5 shadow-md hover:shadow-red-500/50 transition-shadow duration-300" style={{background:"pink"}}>pink</button>

       <button onClick={()=> setColor("olive")}
        className="outline-none rounded-full px-5 py-1 shadow-md hover:shadow-red-500/50 transition-shadow duration-300" style={{background:"olive"}}>olive</button>

       <button onClick={()=> setColor("black")}
        className="outline-none rounded-full px-5 py-1 text-white shadow-md hover:shadow-red-500/50 transition-shadow duration-300" style={{background:"black"}}>black</button>

       <button onClick={()=> setColor("white")}
        className="outline-none rounded-full px-5 py-1 shadow-md hover:shadow-red-500/50 transition-shadow duration-300" style={{background:"white"}}>white</button>

       <button onClick={()=> setColor("gray")}  className="outline-none rounded-full px-5 shadow-md hover:shadow-red-500/50
 transition-shadow duration-300" style={{background:"gray"}}>gray</button>  
      </div>
    </div>
 </>
  )
}

export default App
