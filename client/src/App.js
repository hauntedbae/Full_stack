import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp/index";
import LogIn from "./pages/LogIn/index";
import CommentProvider from "./context/CommentProvider";
import Comments from "./pages/Comment";
import AnswerProvider from "./context/answerProvider";
import Edit from "./pages/Edit";

function App() {
  return (
    <AnswerProvider>
      <CommentProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/comment/:id" element={<Comments />}></Route>
          <Route path="/singup" element={<SingUp />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
      </CommentProvider>
    </AnswerProvider>
  );
}

export default App;
