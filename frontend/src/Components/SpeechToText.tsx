


// import React from 'react';
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"

const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

//   const promptInput = listening
// const generateBtn = document.getElementById("generateBtn");
// const stopBtn = document.getElementById("stopBtn");
// const resultText = document.getElementById("resultText");
const [output,setOutput] = useState<String>("")
  
  const generate = async () => {

    try {
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: listening }],
        }),
      });
  
      const data = await response.json();
      console.log(data);
    //   setOutput( data.choices[0].message.content)
    } catch (error) {
      console.error("Error:", error);
      setOutput( "Error occurred while generating.")
    }
  };


  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick = {(e:any)=> {SpeechRecognition.startListening( {continuous: true,
      language: "en"} )
        console.log('start');
    } }>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>

      <div>

      <button onClick={generate}>generate</button>
      <p>{output}</p>
      </div>

    </div>
  );
};
export default SpeechToText;