import React from 'react';
import { Link, NavLink} from "react-router-dom";

function Header (){
    return (
        <div>
        <h1><Link to ="/">QuizFiend</Link></h1>
            <nav> <NavLink to ="/" >Home</NavLink> | <NavLink to ="/suggestions">Suggest a Quiz</NavLink></nav>
            <form>
                <label>Search</label>
                <input type="text"></input>
            </form>
        </div>
    )
}

export default Header; 