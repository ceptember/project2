import React, {useState} from 'react'; 
import Result from './Result'

function Quiz ({q}){
    // Order matters, the index of the option is the index of the corresponding result! 
   
    const [scoreSheet, setScoreSheet] = useState({})
    const [finalResult, setFinalResult] = useState({}) 
   
    const [quiz, setQuiz] = useState(q); 

    const [questionsCompleted, setQuestionsCompleted] = useState(-1);

    function keepScore(index, questionNum){
        if (questionNum === questionsCompleted+1){
            console.log(quiz.results[index])
            const scoreCopy = {...scoreSheet}
    
            if (Object.keys(scoreCopy).includes(index.toString())){
                scoreCopy[index]++
            }
            else {
                scoreCopy[index] = 1
            }

            setScoreSheet(scoreCopy)

            if (questionNum == (quiz.questions.length-1).toString()){
                addScore(scoreCopy)
            }
            setQuestionsCompleted(questionsCompleted + 1)   
        }
    }

    function addScore(finalScore){
        const highScore = Math.max(...Object.values(finalScore))
        let winners = Object.keys(finalScore).filter( x => finalScore[x] == highScore)
        setFinalResult(quiz.results[winners[0]]) //
    }

    

    return (
        <div id="quiz-component">
            <h2>{quiz.title}</h2>
            <img src ={quiz.image} class="quiz-image" />


            {quiz.questions.map( x => { 
                return  (  <div key={x.question} className="question-answer-holder">
                                <div className={ (quiz.questions.indexOf(x))==(questionsCompleted +1) ?   "current-question" : "other-questions"} > {x.question} </div>
                                <div> {x.answers.map( y => <div className= { (quiz.questions.indexOf(x))==(questionsCompleted +1) ?   "current-question-options" : "other-questions-options"} key={y} onClick={ () => keepScore((x.answers.indexOf(y)), quiz.questions.indexOf(x)) }> {y} </div>)}  </div>
                            </div>
                        )
            }) }

            { finalResult.result ? <Result finalResult={finalResult}/> : ""}    

            <br />
            
            <div id="comments-section">
            </div>

        </div>



    )
}

export default Quiz; 

