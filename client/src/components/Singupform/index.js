import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/index";

const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border: 2px solid #31464b;
  border-radius: 40px;
  width: 400px;
  height: 400px;
  display: flex;
  margin: 0 auto;
`;
const Label = styled.label`
  font-size: 20px;
`;
const Input = styled.input`
  width: 90%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #31464b;
`;

const SingUpForm = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = { email, password };

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    })
      .then(() => {
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>Email:</Label>
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <Label>Password:</Label>
      <Input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button type="contained">{children}</Button>
    </StyledForm>
  );
};
export default SingUpForm;
