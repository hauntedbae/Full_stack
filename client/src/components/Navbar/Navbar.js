import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  padding: 20px 80px;
  border-bottom: 1px solid #31464b;
  background-color: #72574d;
  border-radius: 5px;
  width: 90%;
`;

const Logo = styled.div`
  color: #393633;
  font-size: 70px;
  font-weight: 900px;
  &:hover {
    color: black;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0px 18px;
  font-size: 30px;
  color: #393633;
  &:hover {
    color: black;
  }
`;
const RightContainer = styled.div`
  display: flex;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        {" "}
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>Baddies and Buddies</Logo>
          </Link>
        </div>
        <RightContainer>
          <nav>
            <StyledLink to="/singup">Sing up</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
          </nav>
        </RightContainer>
      </Container>
    </div>
  );
};

export default Navbar;
