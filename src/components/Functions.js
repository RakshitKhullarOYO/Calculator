import React from 'react'
import Buttons from './Buttons';

function Functions(props){

    const num = props.num;
    const setNum = props.setNum;

    // add number in input
  const append = (value)=>{
    setNum({...num,current : num.current*10 + value})
  }

  // clear Everything
  const clearEverything = () =>{
    setNum({
      previous : '',
      current : '',
      sign : ''
    })
  }


  // delete last element
  const deleteOne = () => {
//     setNum({...num,current : Math.floor(num.current/10)})
        let string = num.current.toString()

        string = string.substring(0,string.length-1)

        setNum({...num,current : string.parserInt()})
  }

  // sign changing
  const signChanging = (sign1) => {
    let val = num.current

    setNum({previous : val,current : '',sign : sign1})
  }

  // calculate
  const calculate = ()=>{
    if(num.sign === '' || num.current === '') return

    let val = num.previous

    if(num.sign === "/"){
      if(num.current === 0) return
      val /= num.current
    }else if(num.sign === ("*")){
      val *= num.current
    }else if(num.sign === ("+")){
      val += num.current
    }else if(num.sign === ("-")){
      val -= num.current
    }

    setNum({current : val,previous : '',sign : ''})

  }

    return(
        <>
            <Buttons clearEverything = {clearEverything} deleteOne = {deleteOne} 
              append = {append}   signChanging = {signChanging} calculate = {calculate}/>
        </>
    )
}

export default Functions
