import React from 'react'
import { Link} from "react-router-dom";

function QuizPreview({quiz}){
  const style = {
    backgroundImage: 'url(' + quiz.image + ')',
    backgroundSize: '100%',
  };
    return (

        <div >
            <Link className='link' to={"/"+quiz.id} >
              <div className="quiz-preview" style={style}>
                <div className="preview-textbox">
                  <h3>{quiz.title}</h3>
                </div> 
              </div>
             </Link>
          
        </div>
    )
}

export default QuizPreview; 



