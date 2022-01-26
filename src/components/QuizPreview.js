import React from 'react'
import { Link} from "react-router-dom";

function QuizPreview({quiz}){
  const style = {
   backgroundImage: 'url(' + quiz.image + ')',
   
   // **** Why doesn't this filepath work?? 
   //backgroundImage: 'url("../img/NYC.jpg")',
    backgroundSize: '100%',
  };
    return (

        <div >
            <Link className='link' to={"/quizzes/"+quiz.id} >
              <div className="quiz-preview" style={style}>
                <div className="preview-textbox">
                  <div className="preview-text">
                    <h3>{quiz.title}</h3>
                    <span className="img-credit">Photo by <a target="_blank" href={"https://unsplash.com/@"+quiz.imagecredit}> @{quiz.imagecredit}</a> for Unsplash</span>
                    </div>
                  
                  
                </div> 
                
              </div>
             </Link>
          
        </div>
    )
}

export default QuizPreview; 



