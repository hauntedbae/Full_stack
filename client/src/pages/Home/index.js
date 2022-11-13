import Navbar from "../../components/Navbar/Navbar";
import DefaultLayout from "../../layouts/DefaultLayout";
import CenterLayout from "../../layouts/CenterLayout";
import Button from "../../components/Button/index";
import Card from "../../components/Card/index";
import CustomForm from "../../components/CustomForm/index";
import { useContext } from "react";
import { CommentContext } from "../../context/CommentProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { comments } = useContext(CommentContext);

  const deleteFunction = (id) => {
    fetch("http://localhost:8080/questions/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  return (
    <>
      <Navbar title="Sing up" subtitle="Log in"></Navbar>
      <DefaultLayout>
        <CustomForm />
      </DefaultLayout>
      <CenterLayout>
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              <Card
                key={comment.id}
                title={comment.topic}
                subtitle={comment.question}
              >
                <Link to={`/comment/${comment.id}`}>
                  <Button type="white">View log</Button>
                </Link>
                <Link to={`/edit/${comment.id}`}>
                  <Button type="yellow">Edit</Button>
                </Link>
                <Button
                  type="contained"
                  onClick={() => deleteFunction(comment.id)}
                >
                  Delete
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </CenterLayout>
    </>
  );
};
export default Home;
