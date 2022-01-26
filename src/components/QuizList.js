import React from 'react';
import QuizPreview from './QuizPreview';


function QuizList ({quizzes}){

    
    return(
        
        <div id="quiz-list">
            <h2>Take a Quiz</h2>
             {quizzes.map( (q)=> <div key={q.id}> <QuizPreview quiz={q}/> </div>)}
            
        </div>
    )
}

export default QuizList; 