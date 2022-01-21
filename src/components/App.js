import React, {useState, useEffect} from 'react';
import Quiz from './Quiz';
//import '../App.css';
import Header from './Header'
import QuizList from './QuizList'
import SuggestionsPage from './SuggestionsPage';
import { Route, Switch } from "react-router-dom";

function App() {

  const [quizzes, setQuizzes] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/quizzes')
        .then(resp => resp.json())
        .then(data => setQuizzes(data))
}, []);


  return (
    <div className="App">

        <Header />
        <Switch>

        {quizzes.map((q)=> {return(
                  <Route path={"/"+q.id} key={q.id}>
                  <Quiz q={q} />
                  </Route>
        )})}


        <Route exact path="/">
        <QuizList quizzes={quizzes} />
        </Route>

        <Route path="/suggestions">
          <SuggestionsPage />
        </Route>

        </Switch>
        


      
      
    </div>
  );
}

export default App;

/*

App
  |---Header [ Will incliude page title and links to take a quiz or to create a quiz  ]
  |---Main
      |--- QuizList [full list of all quizzes]
      |--- CreateQuiz [form for user to create a new quiz] 
      |--- Quiz [ the actual quiz that the user takes, the text is passed in as props from the backend]  
  |---Footer [ Similar to what I did for Project #1 ]

  Main displays one of the child components based on a React Router <Switch>

  --"Create Quiz" button onClick shows CreateQuiz form in Main
  --CreateQuiz has a form with onSubmit that adds an object with the quiz data to db.json with POST and a .then() 
      adds it to list of quizzes in state of App.js
  --QuizList pulls the list of quizzes down from App.js and displays links to each using React Router
  --Quiz folows a standard format with data for each separate quiz passed in as Props. 

  // If I have time:
    Search bar to search for a quiz
    Another component as a sidebar with links to the top n quizzes 


*/