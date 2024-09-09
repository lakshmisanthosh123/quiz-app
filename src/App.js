import React, { useContext } from 'react';
import QuizContext  from './context/QuizContext';
import Quiz from './components/Quiz';
import Result from './components/Result';
import QuizSettings from './components/QuizSettings';

const App = () => {
  const { state } = useContext(QuizContext);
  const { currentQuestion, questions } = state;

  return (
    <div className="App">
      {currentQuestion === 0 && <QuizSettings />}
      {currentQuestion < questions.length ? <Quiz /> : <Result />}
    </div>
  );
};

export default App;
