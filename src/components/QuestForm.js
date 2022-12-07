import { API } from "aws-amplify"
import { useState } from "react";
import { createQuest } from "../graphql/mutations";
import { Tableau } from "./Tableau";
import TextToSpeech from "./TextToSpeech";

 
 
 
function QuestForm(props) {
    const [user, setUser] = useState(props.currentUser);
    // console.log(props.currentUser);
    // const [user, setUser] = useState(null)
    // useEffect(() => {
    //      Auth.currentAuthenticatedUser().then(
    //         user => setUser(user.attributes.email)); }, 
    //         []);
    

    const initialize={
        email:`${user.email}`,lang:"",textOrg:"",schedOn:""
    }
 
 
   const [quest, setQuest] = useState(initialize)
   const [subm, setSubm] = useState(false)
   const handleChange= (key)=>{
       return (e)=>{ setQuest({...quest, [key]:e.target.value})}
   }
 
   const handleSubmit= async (e)=>{
       e.preventDefault()
       API.graphql({
           query: createQuest,
           variables:{
            input:{...quest}}
       })
       .then(
           e=>{ setSubm(!subm)
            return <TextToSpeech  voix={quest} />
        
        }
       );
   }
   return (

    <> <div className="App">
       <form  onSubmit={handleSubmit}>
           <h2> Add new Question</h2>
           <input type="email" value={user.email} onChange={handleChange("email")} />
           <select name="LangId" onChange={handleChange("lang")} value={quest.lang} >
            <option value="None"  > Language....</option>
            <option value="Arb"> عربي</option>
            <option value="En"> En</option>
            <option value="Fr"> Fr</option>
            <option value="Es"> Es</option>
           </select>
           {/* <input type="text" placeholder="langage" onChange={handleChange("lang")} /> */}
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