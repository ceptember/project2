import React, {useState, useEffect} from 'react';
import Quiz from './Quiz';
import Header from './Header'
import QuizList from './QuizList'
import SuggestionsPage from './SuggestionsPage';
import Search from './Search.js';
import Footer from './Footer.js'
import { Route, Switch } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [quizzes, setQuizzes] = useState([]);
  const  [quizzesToShow, setQuizzesToShow] = useState([]); 
  const [updater, setUpdater] = useState(false);

  useEffect(()=>{
    console.log("quizzes loaded")
    fetch('http://localhost:4000/quizzes')
        .then(resp => resp.json())
        .then(data => {
          setQuizzes(data);
          setQuizzesToShow(data)})
}, [updater]);

  function updateQuizzes(quiz){
    setUpdater(!updater);
  }

  function searchHandler(term){
    let arr= quizzes.filter( q => q.title.toLowerCase().includes(term.toLowerCase()))
    setQuizzesToShow(arr)
    
  }

  return (
    <div className="App">

        <Header />
        <Switch>

        {quizzesToShow.map((q)=> {return(
                  <Route path={"/quizzes/"+q.id} key={q.id}>
                  <Quiz updateQuizzes={updateQuizzes} q={q} />
                  </Route>
        )})}

          {/* home page shows list of quizzes*/}
        <Route exact path="/">
        <Search  onSearch={searchHandler}/>  
        <QuizList quizzes={quizzesToShow} updateQuizzes={updateQuizzes}/>
        </Route>

        <Route path="/suggestions">
          <SuggestionsPage />
        </Route>

        </Switch>
        <Footer />
    
    </div>
  );
}

export default App;

/*

THINGS THAT DON'T WORK YET 
-- Comment form - adds to the DOM on submit, persists on refresh. BUT it doesn't persist if you 
    navigate to another component then navigate back 
--when you search, go to quiz, and click back to go home only the searched results are there



{
      "id": 3,
      "title": "Which whatever are you?",
      "image": "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
      "questions": [
        {
          "question": "What is the first thing?",
          "answers": [
            "a-ish",
            "b-ish",
            "c-ish",
            "d-ish"
          ]
        },
        {
          "question": "What is the second thing?",
          "answers": [
            "eey",
            "bee",
            "sea",
            "dee"
          ]
        },
        {
          "question": "What is the third thing?",
          "answers": [
            "the a one",
            "the b one",
            "the c one",
            "the d one"
          ]
        }
      ],
      "results": [
        "A",
        "B",
        "C",
        "D"
      ],
      "comments": [
        {
          "comment": "OMG so accurate!",
          "user": "user1"
        }
      ]
    }



*/
