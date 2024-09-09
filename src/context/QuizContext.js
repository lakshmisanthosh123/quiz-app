const initialState = {
    questions: [
      {
        category: 'General Knowledge',
        difficulty: 'easy',
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 'Paris',
      },
      {
        category: 'Literature',
        difficulty: 'medium',
        question: 'Who wrote "Hamlet"?',
        options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'],
        answer: 'William Shakespeare',
      },
      // Add more questions with categories and difficulty levels
    ],
    score: 0,
    currentQuestion: 0,
    timer: 30,
    selectedCategory: 'All',  // New state to hold selected category
    selectedDifficulty: 'All',  // New state to hold selected difficulty
  };
  
  // Add actions to filter questions based on category and difficulty
  const quizReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CATEGORY':
        return {
          ...state,
          selectedCategory: action.payload,
        };
      case 'SET_DIFFICULTY':
        return {
          ...state,
          selectedDifficulty: action.payload,
        };
      case 'FILTER_QUESTIONS':
        const filteredQuestions = state.questions.filter(question => {
          const categoryMatches = state.selectedCategory === 'All' || question.category === state.selectedCategory;
          const difficultyMatches = state.selectedDifficulty === 'All' || question.difficulty === state.selectedDifficulty;
          return categoryMatches && difficultyMatches;
        });
        return {
          ...state,
          filteredQuestions,
        };
      // Other cases...
      default:
        return state;
    }
  };
  