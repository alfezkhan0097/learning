import { useEffect, useState } from 'react'
import './Advice.css'
import axios from 'axios'
function Advice (){
    const APIURL = 'https://api.adviceslip.com/advice'
    const [advice, setAdvice] = useState('')
    useEffect(()=>{
        const fetchAdvice = async () =>{
            const res = await axios.get(APIURL)
            setAdvice(res.data.slip)
        }
        fetchAdvice()
    },[])
    const random = async () =>{
        const res = await axios.get(APIURL)
        setAdvice(res.data.slip)
    }
    return(
        <>
       <div className="con">
        <div className="text-con">
            <h6>ADVICE #{advice.id}</h6>
            <h3>"{advice.advice}"</h3>
        </div>
        <div className="btm-con">
            <img id='divide'src="./pattern-divider-desktop.svg" alt="" />
            <button onClick={random}><img src="./icon-dice.svg" alt="dice img" /></button>
        </div>
        </div> 
        </>
    )
}

export default Advice