import { createContext, useState, useEffect } from "react";

export const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/questions")
      .then((resp) => resp.json())
      .then((response) => {
        setComments(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
