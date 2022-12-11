import './App.css';
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"
import QuestForm from './components/QuestForm';
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

Amplify.addPluggable(new AmazonAIPredictionsProvider())
function App({ signOut, user }) {

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
 return (
   <div className="App">
    
     <h1>Hello {user.attributes.email}</h1>
     <button onClick={signOut}>Sign out</button>
     <QuestForm  currentUser={user.attributes}/>
 
   </div>
 )}
export default withAuthenticator(App);
