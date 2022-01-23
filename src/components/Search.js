import React, {useState} from 'react';

function Search({onSearch}){

    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(e){
        setSearchTerm(e.target.value);
        onSearch(e.target.value);

    }

    return (
        <div id="search">
                <form>
                <label>Search</label>
                <input type="text" value={searchTerm} onChange={handleSearch}></input>
            </form>
        </div>
    )
}

export default Search; 