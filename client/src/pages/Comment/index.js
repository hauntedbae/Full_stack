import Navbar from "../../components/Navbar/Navbar";
import DefaultLayout from "../../layouts/DefaultLayout";
import Button from "../../components/Button";
import { useContext } from "react";
import { CommentContext } from "../../context/CommentProvider";
import { AnswerContext } from "../../context/answerProvider";
import Card from "../../components/Card";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReplyForm from "../../components/ReplyForm";

const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;

const Answer = styled.div`
  width: 100px;
`;

const Comments = () => {
  const { comments } = useContext(CommentContext);
  const { answers } = useContext(AnswerContext);

  const { id } = useParams();
  const text = comments.find((text) => text.id === Number(id));
  const answer = answers.find((answer) => answer.id === Number(id));

  const deleteAnswerFunction = (id) => {
    fetch("http://localhost:8080/answers/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, //Add this line
      },
      body: JSON.stringify(answer),
    });
  };

  const deleteFunction = (id) => {
    fetch("http://localhost:8080/questions/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, //Add this line
      },
      body: JSON.stringify(text),
    });
  };

  return (
    <>
      <Navbar title="Sing up" subtitle="Log in"></Navbar>
      <DefaultLayout>
        <ReplyForm />
      </DefaultLayout>
      <DefaultLayout>
        <Comment>
          <Card key={text.id}>
            <h1>{text.topic}</h1>
            <h2>{text.question}</h2>
            <Button type="contained" onClick={() => deleteFunction(text.id)}>
              Delete
            </Button>
          </Card>
          <Answer>
            {answers.map((answer) => (
              <div key={answer.id}>
                <Card title={answer.id} subtitle={answer.answer}>
                  <Button
                    type="contained"
                    onClick={() => deleteAnswerFunction(answer.id)}
                  >
                    Delete
                  </Button>
                </Card>
              </div>
            ))}
          </Answer>
        </Comment>
      </DefaultLayout>
    </>
  );
};

export default Comments;
