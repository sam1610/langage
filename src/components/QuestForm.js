import { API } from "aws-amplify"
import { useState } from "react";
import { createQuest } from "../graphql/mutations";
import { Tableau } from "./Tableau";
import { Predictions , Storage} from "aws-amplify";




 
   function   QuestForm({currentUser}) {
    
    const initialize={
        email:`${currentUser.email}`,lang:"",textOrg:"",schedOn:"", audioUrlOrg:""
    }
 
 
   const [quest, setQuest] = useState(initialize)
   const [subm, setSubm] = useState(false)
   const voiceId={ Fr:"Mathieu", En:"Emma", Es:"Lucia", Arb:"Zeina"}

   const handleChange= (key)=>{
       return (e)=>{ setQuest({...quest, [key]:e.target.value})}
   }


     function S3Storage(blb){
    
    fetch(blb).then(r=>r.blob()).then( 
      async blob => {
         const flPut=  await  Storage.put(`audio%${currentUser.email}%${Date.now()}`, blob, {
        
            contentType:"audio/mp3",
            level:"public"
        });
        const audi0=  Storage.get(flPut.key, {level:'public'})  
        // setQuest( current =>{ return {...current, "audioUrlOrg":audi0}})  
         
        await API.graphql({
          query: createQuest,
          variables:{
           input:{...quest,audioUrlOrg:audi0 }
       }
      })
      .then(
          e=>{ setSubm(!subm)
       }
      );     
       
      }

)
      

   }
   const handleSubmit= async (e)=>{
       e.preventDefault()

// call the Conversion function 
   await Predictions.convert({
        textToSpeech: {
          source: {
            text: quest.textOrg,
            language: quest.lang 
          },
          voiceId: voiceId[quest.lang]
        }
      }).then( result => 

        // s3 Storage
          S3Storage(result.speech.url)
    )
     
   }
   return (

    <> <div className="App">
       <form  onSubmit={handleSubmit}>
           <h2> Add new Question</h2>
           <input type="email" value={currentUser.email} onChange={handleChange("email")} />
           <select name="LangId" onChange={handleChange("lang")} value={quest.lang} >
            <option value="None"  > Language....</option>
            <option value="Arb"> عربي</option>
            <option value="En"> En</option>
            <option value="Fr"> Fr</option>
            <option value="Es"> Es</option>
           </select>
           <input type="text" placeholder="Origin Text" val={quest.textOrg} onChange={handleChange("textOrg")} />
           <input type="date" placeholder="Scheduled On" value={quest.schedOn} onChange={handleChange("schedOn")} />
           <button type="submit"  > Add New Question</button>
       </form>
     
     <Tableau    etat={subm}/>
     </div> 
     
     </>
     
   );
 }
 
export default QuestForm;