import React, {useState, useEffect} from 'react'; 
import Suggestion from './Suggestion';

function SuggestionsPage(){

    const [suggestions, setSuggestions] = useState([]); 
    const [userName, setUserName] = useState(""); 
    const [sugText, setSugText] = useState("");   
    const [updater, setUpdater] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/suggestions')
            .then(resp => resp.json())
            .then(data => setSuggestions(data))
        }, [])
    
    function handleSug(e){
        e.preventDefault(); 
        console.log("submit")
        const obj = {user: userName, 
            suggestion: sugText}
        fetch('http://localhost:4000/suggestions', {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(obj)
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                const sug = [...suggestions, data]
                setUserName("");
                setSugText("")
                setUpdater(!updater)
                setSuggestions(sug)
            })
    }

    function deleteSug(id){
        fetch(`http://localhost:4000/suggestions/${id}`,{
            method: "DELETE"
        })
            .then(setUpdater(!updater))
    }
        
    return (

        <div> 
            <h2>Have an idea for a new quiz? Let us know! </h2>
            <form id="suggest-form" onSubmit={handleSug}>
                <label>Username: </label>
                <br />
                <input id="suggest-user" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/> 
                <br /> 
                <label>Comment: </label> 
                <br />
                <textarea id="suggest-textbox" value={sugText} onChange={(e)=>setSugText(e.target.value)}></textarea>
                <br />
                <input type ="submit"></input>
            </form>

              {suggestions.map( (s) => <Suggestion sug={s} key={s.id} onDelete={deleteSug}/> )}  

        </div>

    ) 
}

export default SuggestionsPage; 


