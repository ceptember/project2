import React, {useState} from "react";


function NewComponent (){

    const [data, setData] = useState("")

    return (
        <div>
            <form>
                <input type="text" value={data} onChange={(e)=> setData(e.target.value) }></input>
                <p>{data.length}</p>
            </form>
        </div>


    )

}

export default NewComponent; 