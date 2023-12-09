import React from "react"


export default function Box(props) {

    return (
        <div className="numberButtons" onClick={props.handleClick} id={props.index}  >{props.value}</div>
    )
}