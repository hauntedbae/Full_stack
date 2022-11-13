import { createContext, useState, useEffect } from "react";

export const AnswerContext = createContext();

const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/answers")
      .then((resp) => resp.json())
      .then((response) => {
        setAnswers(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <AnswerContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerProvider;
