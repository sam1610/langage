import { Storage } from "aws-amplify";
import { useState } from "react";

const Audiotest = (blb, email ) => {
    const [audioUrl, setaudioUrl] = useState("")

fetch(blb).then(r=>r.blob()).then( 
        async blob => {try {
           const flPut=  await Storage.put(`audio%${email}%${Date.now()}`, blob, {
          
              contentType:"audio/mp3",
              level:"public"
          });
          setaudioUrl(await Storage.get(flPut.key, {level:'public'}) )          
        } catch (err) {
            setaudioUrl("Error")
        }}
  
  )
  return audioUrl
}

export default Audiotest