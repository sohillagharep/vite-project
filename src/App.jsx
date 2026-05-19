import React from "react";
import Hospital from "./componants/static/Hospital"
import Dash from "./componants/static/Dash"
import Config from "./componants/static/Config"
import Logout from "./componants/static/Logout"
import Login from "./componants/static/Login"
import Add from "./componants/static/Add"
import { BrowserRouter, Routes , Route} from "react-router-dom";




export default function App(){
    return(

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/hospital' element={ <Hospital/>} />
            <Route path='/dash' element={ <Dash/>} />
            <Route path='/login' element={ <Login/>} />
            <Route path='/config' element={ <Config/>} />
            <Route path='/logout' element={ <Logout/>} />
            <Route path='/add' element={ <Add/>} />


        </Routes>
            
        </BrowserRouter>
 
             
            

         
    
           

        
    );
}