import React, {useState} from 'react';
import { Link, NavLink} from "react-router-dom";

function Header ({onSearch}){
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(e){
        setSearchTerm(e.target.value);
        onSearch(e.target.value);

    }

    return (
        <div>
        <h1><Link to ="/">QuizFiend</Link></h1>
            <nav> <NavLink to ="/" >Home</NavLink> | <NavLink to ="/suggestions">Suggest a Quiz</NavLink></nav>
            <form>
                <label>Search</label>
                <input type="text" value={searchTerm} onChange={handleSearch}></input>
            </form>
        </div>
    )
}

export default Header; 