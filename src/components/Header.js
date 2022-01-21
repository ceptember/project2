import React from 'react';
import { Link} from "react-router-dom";

function Header (){
    return (
        <div>
            <h1><Link to ="/" exact>QuizFiend</Link></h1>
            <form>
                <label>Search</label>
                <input type="text"></input>
            </form>
        </div>
    )
}

export default Header; 