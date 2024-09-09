import React, { useContext } from 'react';
import QuizContext  from '../context/QuizContext';

const Result = () => {
  const { state } = useContext(QuizContext);
  const { score, questions } = state;

  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your final score is: {score}/{questions.length}</p>
    </div>
  );
};

export default Result;
