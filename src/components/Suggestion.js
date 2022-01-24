import React from "react";

function Suggestion ({sug, onDelete}){

    return (
        <div className="suggestion"> 
            
            <h4><button onClick={()=>onDelete(sug.id)}>x</button> {sug.user}</h4>
            <p>{sug.suggestion}</p>
            <br /><br />
        </div>
    )
}

export default Suggestion; 