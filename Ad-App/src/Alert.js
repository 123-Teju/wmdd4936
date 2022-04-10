import React,{useEffect} from 'react'

const Alert=({text,type,setAlert})=>{
      useEffect(()=>{
        setTimeout(()=>{
          setAlert({"show":false})
        },3000)
      },[])
      const INFO='info';
      const DANGER='danger';
      const SUCCESS='success';
      let bgColor='';
      let contentColor=''
      if(type===INFO){
        bgColor='#FFD36E';
        contentColor='#836c35';
      }
      if(type===DANGER){
        bgColor='#F24A72';
        contentColor='#6c2032';
      }
      if(type===SUCCESS){
        bgColor='#6BCB77';
        contentColor='#305d36';
      }
    
      return (
        <div className='alert-box' style={{'backgroundColor':bgColor,'color':contentColor,'borderTop':`5px solid ${contentColor}`}}>
            <p>{text}</p>
        </div>
      )
    }

export default Alert;