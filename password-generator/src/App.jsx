import { useState,useCallback,useEffect,useRef } from 'react'


function App() {

  const [length,setlength]=useState(8);
  const [number,setnumber]=useState(false);
  const [char,setchar]=useState(false);
  const [password,setpassword]=useState("");

  // ref hook 
  const passRef=useRef(null);
   
  const passgenerator = useCallback(() => {
   let pass="";
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   if(number) str+="0123456789"
   if(char) str +="@#$%%^&*" ;
  
    for(let i=1;i<length;i++){
    let char = Math.floor(Math.random()*str.length+1);
    pass += str.charAt(char);
    }
    setpassword(pass)
   } , [length,char,number,setpassword])


const copyPass =useCallback(()=>{
  passRef.current?.select()
  window.navigator.clipboard.writeText(password)
}, [password])

//useEffect
 useEffect(()=>{
  passgenerator()},[length,number,char,passgenerator]
 )


  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 my-9  bg-gray-800">
     <h1 className="text-white text-center my-5">Password Generator</h1>
      <div className="text-black flex shadow rounded-lg overflow-hidden bg-white px-4 py-1 mb-4">
        <input type="text"
         placeholder='password' 
         value={password}
         readOnly
        className=" outline-none w-full py-1 px-3" 
        ref={passRef}
         /> 
          <button 
          onClick={copyPass}
          className="bg-blue-500 rounded text-white px-5 py-0.8 shrink-0 hover:bg-blue-900 ">copy</button>
          </div>


          <div className='flex text-sm gap-x-2 text-white'>
            <div className="flex item-center gap-x-1">
            <input type="range"
            min={6}
            max={15}
            value={length}
            onChange={(e)=>setlength(e.target.value)} /> 
            <label >Length: {length}</label>
            </div>


           <input  
           type="checkbox"
           defaultChecked={number}
           onChange={()=>{setnumber((prev)=>!prev)} }
           />
           <label>Number</label>

        <input type="checkbox"  
         defaultChecked={char}
         onChange={()=>{setchar((prev)=>!prev)}}/>
        <label >Symbol</label>
           
        </div>
      </div> 
    </>
  )
}


export default App
