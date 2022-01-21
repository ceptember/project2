import React from 'react';
import QuizPreview from './QuizPreview';


function QuizList ({quizzes}){

    
    return(
        
        <div>
            <h2>All Quizzes</h2>
             {quizzes.map( (q)=> <div key={q.id}> <QuizPreview  quiz={q}/> </div>)}
            <p> make another comment section "Suggest a quiz!" with a POST request to a 
                separate "suggestions" resource in db.json. 
                Suggestion comments can be votes on with another PATCH.
                Add another route to this.  </p>
            
        </div>
    )
}

export default QuizList; 