import React from "react";

function Suggestion ({sug}){
    return (
        <div className="suggestion"> 
            <h4>{sug.user}</h4>
            <p>{sug.suggestion}</p>
            <br /><br />
        </div>
    )
}

export default Suggestion; 