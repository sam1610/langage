import { API } from "aws-amplify"
import { useState } from "react";
import { createQuest } from "../graphql/mutations";

 
 
 
function QuestForm(props) {
    const [user, setUser] = useState(props.currentUser);
    console.log(props.currentUser);
    // const [user, setUser] = useState(null)
    // useEffect(() => {
    //      Auth.currentAuthenticatedUser().then(
    //         user => setUser(user.attributes.email)); }, 
    //         []);
    

    const initialize={
        email:`${user.email}`,lang:"",textOrg:"",schedOn:""
    }
 
 
   const [quest, setQuest] = useState(initialize)
   const handleChange= (key)=>{
       return (e)=>{ setQuest({...quest, [key]:e.target.value})}
   }
 
   const handleSubmit= async (e)=>{
       e.preventDefault()
       API.graphql({
           query: createQuest,
           variables:{
            input:{...quest}}
       }).then(
           e=>{ setQuest(initialize)}
       );
   }
   return (
     <div className="App">
       <form  onSubmit={handleSubmit}>
           <h2> Add new Question</h2>
           <input type="email" value={user.email} onChange={handleChange("email")} />
           <select name="LangId" onChange={handleChange("lang")} value={quest.lang} >
            <option value="None"  > Language....</option>
            <option value="Ar"> عربي</option>
            <option value="En"> En</option>
            <option value="Fr"> Fr</option>
            <option value="Es"> Es</option>
           </select>
           {/* <input type="text" placeholder="langage" onChange={handleChange("lang")} /> */}
           <input type="text" placeholder="Origin Text" val={quest.textOrg} onChange={handleChange("textOrg")} />
           <input type="date" placeholder="Scheduled On" value={quest.schedOn} onChange={handleChange("schedOn")} />
           <button type="submit"  > Add New Question</button>
       </form>
       <GridData rowData={quest}> </GridData>
    
     </div>
   );
 }
 
export default QuestForm;