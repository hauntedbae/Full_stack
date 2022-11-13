import styled from "styled-components";
import { useState } from "react";

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 2px solid #72574d;
  background-color: #72574d;
  width: 500px;
  margin: 12px;
  border-radius: 5px;
`;

const Plus = styled.div`
  color: #95a1a4;
  font-size: 40px;
`;
const Minus = styled.div`
  color: #95a1a4;
  font-size: 60px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Result = styled.span`
  font-size: 20px;
`;

const Card = ({ title, subtitle, children, description }) => {
  const [likes, setLikes] = useState(0);
  return (
    <StyledCard>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Subtitle>{description}</Subtitle>
        {children}
      </div>
      <div>
        <Plus onClick={() => setLikes(likes + 1)}>+</Plus>
        <Minus onClick={() => setLikes(likes - 1)}>-</Minus>
        <Result>{likes}</Result>
      </div>
    </StyledCard>
  );
};

export default Card;
