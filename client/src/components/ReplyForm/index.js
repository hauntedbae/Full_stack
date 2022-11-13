import { useState } from "react";
import Button from "../Button";
import styled from "styled-components";

const StyledCont = styled.div`
  height: 100%;
`;

const StyledForm = styled.form`
  margin-left: 10px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border-radius: 6px;
`;

const ReplyForm = () => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const answers = { answer: answer };

    fetch("http://localhost:8080/answers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(answers),
    })
      .then(() => {
        console.log(answers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledCont>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextarea
          type="text"
          required
          placeholder="Answer"
          rows="5"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button type="contained">Reply</Button>
      </StyledForm>
    </StyledCont>
  );
};
export default ReplyForm;
