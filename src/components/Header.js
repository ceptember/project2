import React from 'react';
import { Link, NavLink} from "react-router-dom";

function Header (){

    return (
        <div id="header">
        <h1><Link to ="/">QuizFiend  <i className="far fa-grin-squint-tears"></i>  </Link> </h1>
        
            <nav> <NavLink to ="/" >Home</NavLink> | <NavLink to ="/suggestions">Suggest a Quiz</NavLink></nav>

        </div>
    )
}

export default Header; 