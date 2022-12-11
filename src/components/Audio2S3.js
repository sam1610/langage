import { Storage } from "aws-amplify";
import { useState } from "react";

export  async function  Audio2S3 ( blb, email){
const [audioUrl, setaudioUrl] = useState("")
  await fetch(blb)
    .then(
      r=>r.blob())
      .then( 
        async blob => {try {
           const flPut=  await Storage.put(`audio%${email}%${Date.now()}`, blob, {
          
              contentType:"audio/mp3",
              level:"public"
          });
          setaudioUrl(await Storage.get(flPut.key, {level:'public'}));
          // setaudioUrl(()=> encodeURIComponent(flPut.key));
        } catch (err) {
          console.log("File upload Error", err);
        }}
  
  )
console.log("S3 SignedUrl : ", audioUrl);
return audioUrl
}