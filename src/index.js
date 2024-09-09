import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  QuizProvider from './context/QuizContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <QuizProvider>
    <App />
  </QuizProvider>,
  document.getElementById('root')
);
