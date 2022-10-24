import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"
import QuestForm from './components/QuestForm';
import { useEffect, useState } from 'react';
import { listQuests } from './graphql/queries';
import { API } from 'aws-amplify';

function App({ signOut, user }) {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    fetchNotes().then(
      (note)=> setNotes(note)
    );

  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listQuests });
    return apiData.data.listQuests.items;
    
  }
 
 return (
   <div className="App">
    
     <h1>Hello {user.attributes.email}</h1>
     <button onClick={signOut}>Sign out</button>
     <QuestForm  currentUser={user.attributes}/>
     <div style={styles.container}>
      <ul>

      <h2>Your Items</h2>
      {notes.map( (note)=> (
        <li key={note.id} >{note.textOrg}</li>
      ))}

      </ul>
  
  
    </div>

   </div>
 );
}
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    // flexDirection: 'column',
    backgroundColor: '#023047',
    color: 'white',
    marginTop: 10,
    padding: 10,
  },
};
export default withAuthenticator(App);
