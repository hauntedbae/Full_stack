import { useState } from "react";
import Button from "../Button";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledConteiner = styled.div`
  height: 100%;
`;

const StyledForm = styled.form`
  margin-left: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 12px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border-radius: 6px;
`;
const EditForm = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const { id } = useParams();
  const handleSubmit = (e) => {
    const comments = { topic: topic, question: question };
    e.preventDefault();

    fetch("http://localhost:8080/questions/edit/" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    <StyledConteiner>
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
        <Button type="contained">Edit post</Button>
      </StyledForm>
    </StyledConteiner>
  );
};
export default EditForm;
