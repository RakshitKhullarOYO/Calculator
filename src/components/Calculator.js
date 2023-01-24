import React ,{useState} from 'react'
import CurrPrev from './CurrPrev';
import Functions from './Functions';

function Calculator(){
    const [num,setNum] = useState({previous : '',current:'',sign : ''})

  return (
      <div className="calculator-grid">

        <CurrPrev num = {num} setNum = {setNum}/>
            
        <Functions num = {num} setNum = {setNum} />   

      </div>
  )
}

export default Calculator