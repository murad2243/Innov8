import {BsFillMicFill,BsFillMicMuteFill} from 'react-icons/bs';

import styled from "styled-components"
// import React from 'react';
import {  useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import axios from "axios"
const SpeechToText = () => {
  let {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  let micOff = SpeechRecognition.stopListening
 
  
  const [output,setOutput] = useState<String[]>([])
  const [mic,setMic]= useState<String>("Off")
  const [start,setStart]= useState<String>("Off")
  
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


function handlestart(){
  setStart("On")
  const obj={
    msg:"Hi"
  }
  axios.post("https://digitron-backend.onrender.com/chat/interviewChat",obj).then((res)=>{
    setOutput([res.data])
  })
  .catch((err)=>{
    console.log(err)
  })
}
function handleStop(){
  setStart("Off")
}


  const generate = async () => {
    SpeechRecognition.stopListening()
    setMic("Off")
    setOutput([...output,transcript])

    try {
    const obj={
      msg: transcript
    }
    // resetTranscript;
    console.log(obj);
    

    axios.post("https://digitron-backend.onrender.com/chat/interviewChat",obj).then((res)=>{
      setOutput([...output,res.data])
      console.log(res);
      
    })

    } catch (error) {
      console.error("Error:", error);
      setOutput( ["Error occurred while generating."])
    }
  };

  function handleReset(){
    window.location.reload()
  }

  return (
    <DIV>
      <div className="mainChat">
        {output.map((el,i)=> (
          
        <div className={i%2 === 0 ? "chat" : "user"} key={i}>

        <p> {el} </p> <br />
        </div>
      ))
      
      }</div>
      
      <div className="inputSection">
      <input type="text" onChange={(e)=> transcript= e.target.value} value={transcript} />
      <div>
        { mic === "Off" ? 
        <button className='btn'  onClick = {() => {
          SpeechRecognition.startListening( {continuous: true,
      language: "en"} ); 
      setMic("On");  
      console.log('start');
      // resetTranscript;
    } 
    }>  <BsFillMicMuteFill/></button> :
     <button className='btn'  onClick ={()=> SpeechRecognition.stopListening() }  > <BsFillMicFill /></button>
    } 
      </div>
      {    start === "Off" ? <button className='btn'   onClick={handlestart}>Start</button> : <div className='Btn-section'>
            <button className='btn'  onClick={handleStop}>Stop</button> 
            <button className='btn1' onClick={generate}>
              <button  onClick={resetTranscript}>Send</button>
            </button>
            <button className='btn'  onClick={handleReset}>Reset</button>
          </div>

        } 

      </div>
      
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      
      
      {/* <p>{transcript}</p> */}
     

       
      
      
    

    </DIV>
  );
};
export default SpeechToText;


const DIV = styled.div`
    background: #292929;
    color: white;
    padding: 20px;
    font-size: larger;

.inputSection{
  width: 83%;
  margin: 20px auto;
  display: flex;
  /* gap: 10px; */
  justify-content: space-between;

}
.mainChat{
  width: 80%;
  color: white;
  background-color: black;
  margin: auto;
  padding: 20px;
  overflow-y: scroll;
  border-radius: 10px;
  height: 80vh;
}
.Btn-section{
  display: flex;
  gap: 10px;
}
input{
  height: 30px;
  background: #ffffff ;
  color: #000000;
  padding: 3px;
  width: 80%;
  border-radius: 5px;
}
.btn{
  height: 40px;
  padding: 5px 10px;
  border: 1px;
  /* font-size: larger; */
  border-radius: 10px;
}
.user{
  padding: 0px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #575757;
}

.btn1{
  height: 40px;
  padding: 0 0;
  /* font-size: larger; */
  border-radius: 10px;
}
.btn1 > button {
  height: 100%;
  /* font-size: large; */
  background: white;
  border: 0px;
  border-radius: 10px;
}

`