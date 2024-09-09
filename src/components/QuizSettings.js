import React, { useContext } from 'react';
import QuizContext from '../context/QuizContext';

const QuizSettings = () => {
  const { dispatch } = useContext(QuizContext);

  const handleCategoryChange = (e) => {
    dispatch({ type: 'SET_CATEGORY', payload: e.target.value });
  };

  const handleDifficultyChange = (e) => {
    dispatch({ type: 'SET_DIFFICULTY', payload: e.target.value });
  };

  return (
    <div className="quiz-settings">
      <label>
        Category:
        <select onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Literature">Literature</option>
          {/* Add more categories */}
        </select>
      </label>
      <label>
        Difficulty:
        <select onChange={handleDifficultyChange}>
          <option value="All">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <button onClick={() => dispatch({ type: 'FILTER_QUESTIONS' })}>
        Start Quiz
      </button>
    </div>
  );
};

export default QuizSettings;
