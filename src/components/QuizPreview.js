import React from 'react'

function QuizPreview(){
    let quizzes = [1,2,3 ]
    return (
        <div>
            {quizzes.map((q)=> <div>Preview of quiz {q}</div>)}
          
        </div>
    )
}

export default QuizPreview; 