import React, {useState} from 'react'; 

function Quiz (){
    // Order matters, the index of the option is the index of the corresponding result! 
    let quiz = {
        title: "which whatever are you?",
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
        results : ["A", "B", "C", "D"]
    }

    const [scoreSheet, setScoreSheet] = useState({})

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
    }
    
    return (
        <div>
            QUIZ


            {quiz.questions.map( x => { 
                return  (  <div key={x.question}>
                                <div onClick={()=> console.log(quiz.questions.indexOf(x))}> {x.question} </div>
                                <div> {x.answers.map( y => <div key={y} onClick={ () => keepScore((x.answers.indexOf(y)), quiz.questions.indexOf(x)) }> {y} </div>)}  </div>
                            </div>
                        )
            }) }

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
