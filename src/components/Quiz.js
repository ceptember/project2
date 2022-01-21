import React, {useState, useEffect} from 'react'; 

function Quiz (){
    // Order matters, the index of the option is the index of the corresponding result! 
    let quiz = {
        title: "Which whatever are you?",
        questions: [
            {
            question: "What is the first thing?",
            answers: ["a-ish", "b-ish", "c-ish", "d-ish"]
            },
            {
            question: "What is the second thing?",
            answers: ["eey", "bee", "sea", "dee"]
            },
            {
            question: "What is the third thing?",
            answers: ["the a one", "the b one", "the c one", "the d one"]
            }],
        results : ["A", "B", "C", "D"],
        comments : [{comment: "OMG so accurate!", user: "user1"}, {comment: "Wow that is totally me!!", user: "user2"}, {comment: "Uh... no.", user: "user3"}]
    }

    useEffect(()=>{
        fetch('http://localhost:4000/quizzes')
            .then(resp => resp.json())
            .then(data => console.log(data[0].title))
    });


    const [scoreSheet, setScoreSheet] = useState({})
    const [finalResult, setFinalResult] = useState("")

    function keepScore(index, questionNum){

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
    }

    function addScore(finalScore){
        const highScore = Math.max(...Object.values(finalScore))
        let winners = Object.keys(finalScore).filter( x => finalScore[x] == highScore)
        console.log(quiz.results[winners[0]] + " score: " + highScore)
        setFinalResult(quiz.results[winners[0]])
    }
    
    return (
        <div>
            <h2>{quiz.title}</h2>


            {quiz.questions.map( x => { 
                return  (  <div key={x.question}>
                                <div onClick={()=> console.log(quiz.questions.indexOf(x))}> {x.question} </div>
                                <div> {x.answers.map( y => <div key={y} onClick={ () => keepScore((x.answers.indexOf(y)), quiz.questions.indexOf(x)) }> {y} </div>)}  </div>
                            </div>
                        )
            }) }


            <h2>Your Result:</h2>
            <h3>{finalResult}</h3>
            <h2>What do you think!?</h2>
            <form>
                <label>username </label>
                <input type="text"></input>
                <br /><br />
                <label>comment </label>
                <textarea />
                <br />
                <input type="submit"/>
            </form>

            <h2>Comments:</h2>
            {quiz.comments.map( com => <div key={com.comment}>{com.user}<br />{com.comment}<br /><br /></div>)}

        </div>



    )
}

export default Quiz; 

/*
Quiz logic
 
{
    title: "which whatever are you?"
    questions: [
        {
        question: "What is the first thing?"
        answers: ["a-ish", "b-ish", "c-ish", "d-ish"]
        },
        {
        question: "What is the second thing?"
        answers: ["eey", "bee", "sea", "dee"]
        },
        {
        question: "What is the third thing?"
        answers: ["the a one", "the b one", "the c one", "the d one"]
        }]
    results : ["A", "B", "C", "D"]

}

*/ 
