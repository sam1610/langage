import { useState } from 'react';
import { Predictions } from "aws-amplify";
  
// Amplify.addPluggable(new AmazonAIPredictionsProvider());
// Amplify.configure(awsconfig);
 
 
function TextToSpeech(props) {

  const [audioStream, setAudioStream] = useState();
  const voiceId={ Fr:"Lea", En:"Emma", Es:"Lucia", Arb:"Zeina"}
  console.log(props.voix);

    Predictions.convert({
      textToSpeech: {
        source: {
          text: props.voix.textOrg,
          language: props.voix.lang 
        },
        voiceId: voiceId[props.voix.lang]
      }
    }).then(result => {
      
      setAudioStream(result.speech.url);
      console.log(audioStream);
    
    })
      .catch(err => console.log(err))
  



  // function play() {
  //   var audio = new Audio();
  //   audio.src = audioStream;
  //   audio.play();
  // }
  // return (
  //   <div className="Text">
  //     <div>
  //       <h3>Text To Speech</h3>
  //       <button onClick={play}>play</button>
  //     </div>
  //   </div>
  // );
}
export default TextToSpeech; 