import { Storage } from "aws-amplify";
import { useState } from "react";

export  default async function  Audio2S3 ( blb, email){
const [audioUrl, setaudioUrl] = useState("")
console.log(blb, email);
  await fetch(blb)
    .then(
      r=>r.blob())
      .then( 
        async blob => {try {
           const flPut=  await Storage.put(`audio%${email}%${Date.now()}`, blob, {
          
              contentType:"audio/mp3",
              level:"public"
          });
          setaudioUrl(await Storage.get(flPut.key, {level:'public'}) ) 
          console.log("S3 SignedUrl : ", audioUrl);
          // setaudioUrl(()=> encodeURIComponent(flPut.key));
          return audioUrl
        } catch (err) {
          console.log("File upload Error", err);
        }}
  
  )

return audioUrl
}