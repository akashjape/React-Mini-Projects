export const questions = [
  {
    question: "What is React.js?",
    options: [
      {
        value: "A JavaScript library for building user interfaces",
        isCorrect: true,
      },
      { value: "A backend framework", isCorrect: false },
      { value: "A database management system", isCorrect: false },
      { value: "A programming language", isCorrect: false },
    ],
  },
  {
    question: "Which hook is used for state management in React?",
    options: [
      { value: "useEffect", isCorrect: false },
      { value: "useState", isCorrect: true },
      { value: "useReducer", isCorrect: false },
      { value: "useMemo", isCorrect: false },
    ],
  },
  {
    question: "What is JSX?",
    options: [
      { value: "A syntax extension for JavaScript", isCorrect: true },
      { value: "A CSS framework", isCorrect: false },
      { value: "A type of database", isCorrect: false },
      { value: "A new JavaScript version", isCorrect: false },
    ],
  },
  {
    question: "Which method is used to update the state in React?",
    options: [
      { value: "setState()", isCorrect: true },
      { value: "updateState()", isCorrect: false },
      { value: "changeState()", isCorrect: false },
      { value: "modifyState()", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the useEffect hook?",
    options: [
      {
        value: "To handle side effects in functional components",
        isCorrect: true,
      },
      { value: "To create new components", isCorrect: false },
      { value: "To define CSS styles", isCorrect: false },
      { value: "To modify the state directly", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is NOT a valid React hook?",
    options: [
      { value: "useMemo", isCorrect: false },
      { value: "useFetch", isCorrect: true },
      { value: "useCallback", isCorrect: false },
      { value: "useRef", isCorrect: false },
    ],
  },
  {
    question:
      "How do you pass data from a parent to a child component in React?",
    options: [
      { value: "Using props", isCorrect: true },
      { value: "Using state", isCorrect: false },
      { value: "Using Redux", isCorrect: false },
      { value: "Using context API", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the React.Fragment?",
    options: [
      {
        value:
          "To group multiple elements without adding extra nodes to the DOM",
        isCorrect: true,
      },
      { value: "To handle asynchronous operations", isCorrect: false },
      { value: "To modify component state", isCorrect: false },
      { value: "To style React components", isCorrect: false },
    ],
  },
  {
    question: "Which statement about React keys is true?",
    options: [
      {
        value: "Keys help React identify elements for efficient updates",
        isCorrect: true,
      },
      { value: "Keys are only used in class components", isCorrect: false },
      { value: "Keys must always be numbers", isCorrect: false },
      { value: "Keys are optional in lists", isCorrect: false },
    ],
  },
  {
    question:
      "Which React feature helps in improving performance by memorizing results?",
    options: [
      { value: "useMemo", isCorrect: true },
      { value: "useState", isCorrect: false },
      { value: "useEffect", isCorrect: false },
      { value: "useReducer", isCorrect: false },
    ],
  },
];
