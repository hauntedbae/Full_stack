import { useState } from "react";
import Button from "../Button";
import styled from "styled-components";

const StyledForm = styled.form`
  margin-left: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 12px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
`;
const CustomForm = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const comments = { topic: topic, question: question };

    fetch("http://localhost:8080/questions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, //Add this line
      },

      body: JSON.stringify(comments),
    })
      .then(() => {
        console.log(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Topic"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <br />

        <StyledTextarea
          type="text"
          required
          placeholder="Question"
          rows="5"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button type="contained">Add post</Button>
      </StyledForm>
    </div>
  );
};
export default CustomForm;
