import React from 'react'; 

function Comment({com}){
    return(

        <div>{com.user}<br />{com.comment} <br /><br /></div>
    )
}

export default Comment;

