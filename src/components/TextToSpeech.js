import { useState } from 'react';
import { Predictions } from "aws-amplify";
  
// Amplify.addPluggable(new AmazonAIPredictionsProvider());
// Amplify.configure(awsconfig);
 
 
function TextToSpeech({quest}) {

  const [audioStream, setAudioStream] = useState();
  const voiceId={ Fr:"Lea", En:"Emma", Es:"Lucia", Arb:"Zeina"}
  console.log(quest);

    Predictions.convert({
      textToSpeech: {
        source: {
          text: quest.textOrg,
          language: quest.lang 
        },
        voiceId: voiceId[quest.lang]
      }
    }).then(result => {
      
      setAudioStream(result.speech.url);
      console.log(" AudioStream TextToSpeech: ",audioStream);
    
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