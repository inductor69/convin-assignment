import React,{useState} from "react";

const Col = ({isOver, children}) =>{
    const className=isOver?"highlighted-regin":"";

    return <div className={`col ${className}`} >
        
        {children}
        
    </div>
}

export default Col;