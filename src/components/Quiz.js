import React, { useContext } from 'react';
import QuizContext from '../context/QuizContext';
import { Button, Typography, Box } from '@mui/material';

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { questions, currentQuestion, score, timer } = state;

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      dispatch({ type: 'INCREMENT_SCORE' });
    }
    dispatch({ type: 'NEXT_QUESTION' });
    dispatch({ type: 'RESET_TIMER' });
  };

  return (
    <Box textAlign="center" marginTop={3}>
      <Typography variant="h4">Question {currentQuestion + 1}:</Typography>
      <Typography variant="h5" marginTop={2}>
        {questions[currentQuestion].question}
      </Typography>
      <Box marginTop={2}>
        {questions[currentQuestion].options.map((option, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            onClick={() => handleAnswer(option)}
            sx={{ margin: '10px' }}
          >
            {option}
          </Button>
        ))}
      </Box>
      <Typography variant="h6" marginTop={3}>
        Score: {score}
      </Typography>
      <Typography variant="h6">Time left: {timer} seconds</Typography>
    </Box>
  );
};

export default Quiz;
