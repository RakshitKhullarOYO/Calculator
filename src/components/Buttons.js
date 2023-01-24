import React from 'react'
import '../App.css';

function Buttons(props){
    
    return (
        <>
            <button className = 'span-two' onClick={props.clearEverything} ><h1>AC</h1></button>
            <button onClick={props.deleteOne} ><h1>DEL</h1></button>
            <button onClick={()=>props.signChanging("/")}><h1>/</h1></button>

            <button onClick = {()=>props.append(1)}><h1>1</h1></button>
            <button onClick = {()=>props.append(2)}><h1>2</h1></button>
            <button onClick = {()=>props.append(3)}><h1>3</h1></button>
            <button onClick={()=>props.signChanging("*")}><h1>*</h1></button> 

            <button onClick = {()=>props.append(4)}><h1>4</h1></button>
            <button onClick = {()=>props.append(5)}><h1>5</h1></button>
            <button onClick = {()=>props.append(6)}><h1>6</h1></button>
            <button onClick={()=>props.signChanging("+")}><h1>+</h1></button>
            
            <button onClick = {()=>props.append(7)}><h1>7</h1></button>
            <button onClick = {()=>props.append(8)}><h1>8</h1></button>
            <button onClick = {()=>props.append(9)}><h1>9</h1></button>
            <button onClick={()=>props.signChanging("-")}><h1>-</h1></button>
            
            <button className='span-two' onClick = {()=>props.append(0)}><h1>0</h1></button> 
            <button onClick={props.calculate} className='span-two'><h1>=</h1></button>
        </>
    )
}

export default Buttons