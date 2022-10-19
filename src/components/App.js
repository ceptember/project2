import React, {useState, useEffect} from 'react';
import Quiz from './Quiz';
import Header from './Header'
import QuizList from './QuizList'
import Search from './Search.js';
import Footer from './Footer.js'
import { Route, Switch } from "react-router-dom";

function App() {

  const [quizzes, setQuizzes] = useState([]);
  const  [quizzesToShow, setQuizzesToShow] = useState([]); 

  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/ceptember/quiz-demo-data/quizzes')
        .then(resp => resp.json())
        .then(data => {
          setQuizzes(data);
          setQuizzesToShow(data)})
}, []);

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
                  <Quiz q={q} />
                  </Route>
        )})}

          {/* home page shows list of quizzes*/}
        <Route exact path="/">
        <Search  onSearch={searchHandler}/>  
        <QuizList quizzes={quizzesToShow} />
        </Route>

        </Switch>
        <Footer />
    
    </div>
  );
}

export default App;


