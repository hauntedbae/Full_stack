import styled from "styled-components";

const LightGreyButton = styled.button`
  background-color: #95a1a4;
  border: 1px solid #95a1a4;
  padding: 0px 32px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const MediumGreyButton = styled.button`
  background: #5f6769;
  border: 1px solid #5f6769;
  padding: 0px 32px;
  border-radius: 6px;
  margin: 6px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const DarkGreyButton = styled.button`
  background-color: #5d5c59;
  border: 1px solid #5d5c59;
  padding: 0px 32px;
  border-radius: 5px;
  margin: 6px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const Text = styled.p`
  color: blck;
  font-size: 14px;
`;
const WhiteText = styled.p`
  color: black;
  font-size: 14px;
`;

const Button = ({ children, type, onClick }) => {
  if (type === "contained") {
    return (
      <DarkGreyButton onClick={onClick}>
        <WhiteText>{children}</WhiteText>
      </DarkGreyButton>
    );
  } else if (type === "white") {
    return (
      <LightGreyButton onClick={onClick}>
        <Text>{children}</Text>
      </LightGreyButton>
    );
  } else {
    return (
      <MediumGreyButton onClick={onClick}>
        <WhiteText>{children}</WhiteText>
      </MediumGreyButton>
    );
  }
};

export default Button;
