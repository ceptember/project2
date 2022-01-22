import React from "react";

function Suggestion ({sug}){
    return (
        <div> 
            {sug.user}
            <br />
            {sug.suggestion}
            <br /><br />
        </div>
    )
}

export default Suggestion; 