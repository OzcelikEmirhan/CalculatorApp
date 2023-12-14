import React from "react";

export default function Operations(props){
     return(
        <div onClick={() => props.handleClick(props.value)} className="operationBox">{props.value}</div>
     )

}