import React from "react"
import '../App.css';


function CurrPrev(props){
    const num = props.num;
    const setNum = props.setNum;

  return (
     <div className = 'output'>

           <input type = "number" value={num.previous} className = 'previous-operand'>
           </input >

           <label >Write Number Below</label>
           <input type = "number" value = {num.current} className = 'current-operand'
            onChange={e=>setNum({...num,current:e.target.value})} >
           </input>
      </div>
    )
}



export default CurrPrev
