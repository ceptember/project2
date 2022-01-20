//import logo from './logo.svg';
import Quiz from './Quiz';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         
        </p>
        <Quiz />
      </header>
      
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