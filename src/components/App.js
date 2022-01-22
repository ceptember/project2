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

THINGS THAT DON'T WORK YET 
--Still need to wire up the search bar
-- Comment form - adds to the DOM on submit, persists on refresh. BUT it doesn't persist if you 
    navigate to another component then navigate back 
-- disable each question after being answered 
--Need to add styling



*/