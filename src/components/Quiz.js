import React, {useState} from 'react'; 
import Comment from './Comment';

function Quiz ({q}){
    // Order matters, the index of the option is the index of the corresponding result! 
   
    const [scoreSheet, setScoreSheet] = useState({})
    const [finalResult, setFinalResult] = useState("")
    const [userName, setUserName] = useState(""); 
    const [commentText, setCommentText] = useState("")

    const [quiz, setQuiz] = useState(q); 

    const [questionsCompleted, setQuestionsCompleted] = useState(-1);

    function keepScore(index, questionNum){
        if (questionsCompleted < questionNum){
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
        console.log(quiz.results[winners[0]] + " score: " + highScore)
        setFinalResult(quiz.results[winners[0]])
    }

    function handleSubmit(e){

        const patchObj = {
            comments: [...quiz.comments, {
                comment: commentText,
                user: userName 
            }]
        }

        e.preventDefault(); 
        fetch(`http://localhost:4000/quizzes/${quiz.id}`, {
            method: 'PATCH', 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(patchObj)
        })
            .then(resp => resp.json())
            .then(data => setQuiz(data))


    }
    
    return (
        <div>
            <h2>{quiz.title}</h2>


            {quiz.questions.map( x => { 
                return  (  <div key={x.question}>
                                <div > {x.question} </div>
                                <div> {x.answers.map( y => <div key={y} onClick={ () => keepScore((x.answers.indexOf(y)), quiz.questions.indexOf(x)) }> {y} </div>)}  </div>
                            </div>
                        )
            }) }


            <h2>Your Result:</h2>
            <h3>{finalResult}</h3>
            <h2>What do you think!?</h2>
            <form onSubmit={handleSubmit}>
                <label>username </label>
                <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
                <br /><br />
                <label>comment </label>
                <textarea onChange={(e)=>setCommentText(e.target.value)}/>
                <br />
                <input type="submit" />
            </form>

            <h2>Comments:</h2>
            {quiz.comments.map( com => <Comment key={com.comment} com={com} /> )}

        </div>



    )
}

export default Quiz; 


