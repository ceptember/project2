import React from 'react';
import QuizPreview from './QuizPreview';


function QuizList ({quizzes}){

    
    return(
        
        <div>
            <h2>All Quizzes</h2>
             {quizzes.map( (q)=> <div key={q.id}> <QuizPreview  quiz={q}/> </div>)}
            
            
        </div>
    )
}

export default QuizList; 