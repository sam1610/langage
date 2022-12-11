import TextToSpeech from '../components/TextToSpeech'


export function DebugFn() {
    const param={
        textOrg:" ceci est unedémontration",
        lang:"Fr"
    }
    const url= TextToSpeech()
    console.log(url);
    return (
        <>
        <h1>URL </h1>  
        </>
    )
}

# Local Storage 
<!DOCTYPE html>
<html>
<body>

<h2>Store and retrieve data from local storage.</h2>
<p id="demo"></p>

<script>
// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.city;
</script>

</body>
</html>
<!--     URL Comparaison -->


