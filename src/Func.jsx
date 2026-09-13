import React from "react";

export default function func ({counter , changeCounter}){

    return(

        <div>
            <p className="bg-primary text-light rounded "style={{width:'max-content'}}>Func</p>
            <p className="h1">This is function componant</p>
            <div>
            
            <button disabled={ counter >=5 ? true : false}
             onClick={()=>{changeCounter('plus')}} className="btn btn-warning">+</button>
            <button>{counter}</button>
            <button disabled={ counter <=0 ? true : false}
            onClick={()=>{changeCounter('mins')}} className="btn btn-danger">-</button>
        </div>

            
        </div>


    );

}
