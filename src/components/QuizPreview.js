import React from 'react'
import { Link} from "react-router-dom";

function QuizPreview({quiz}){
  //  let quizzes = [1,2,3 ]
    return (
        <div>
            <Link to={"/"+quiz.id} >
             <div> {quiz.title}</div>
             </Link>
          
        </div>
    )
}

export default QuizPreview; 