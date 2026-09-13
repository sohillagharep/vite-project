import React, { useState } from "react";
import Func from "./componants/Func";





export default function App(){

    // const [userName , setUserName] = useState('ahmed')
    // const changeUserName = () => {
    //     setUserName('ali')

    // }
    const [counter , setCounter] = useState('0')
    const changeCounter = (x) =>{
        if (x== 'plus'){
            setCounter( counter +1)
        }else{
            setCounter(counter -1)
        }
    }

    
    return(

        <div className="p-5">
        <p className="bg-primary text-light rounded" style={{width:'max-content'}}>App</p>
        <div className="d-flex align-items-center gap-4">
        <p className="h1">This is App</p>
        <p className="h1">the counter is ...{counter}</p>
        
        </div>
        
        
        <Func changeCounter={changeCounter} counter ={counter}/>
       
        

        </div>

 
             
            

         
    
           

        
    );
}