import React from "react";

function Suggestion ({sug, onDelete}){

    return (
        <div className="suggestion"> 
            <button onClick={()=>onDelete(sug.id)}>x</button>
            <h4>{sug.user}</h4>
            <p>{sug.suggestion}</p>
            <br /><br />
        </div>
    )
}

export default Suggestion; 