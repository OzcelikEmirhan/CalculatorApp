import React from "react";
import Box from "./Box";

export default function Numbers(props) {
const numberlist = ["1","2","3","4","5","6","7","8","9","0","00",","]
const numbermapped= numberlist.map((prev)=>(
    <Box key={prev.index} value={prev} handleClick={()=>props.handleClick(prev)} > </Box>
) )

    return(
        
        <div className="numbersBox">
            {numbermapped}
        </div>
        
    )
}