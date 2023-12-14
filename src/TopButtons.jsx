import React from "react";

export default function TopButtons(props){
     
    
    
    return(
        <div className='topButtonList'>
        <div className="topButton" id="reset" onClick={props.reset} >Reset</div>
        <div className="topButton" id="sin" onClick={props.sin}>sin</div>
        <div className="topButton" id="cos" onClick={props.cos}>cos</div>
        
      </div>
     )
}