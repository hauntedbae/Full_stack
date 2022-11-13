import Navbar from "../../components/Navbar/Navbar";
import DefaultLayout from "../../layouts/DefaultLayout";
import CenterLayout from "../../layouts/CenterLayout";
import Heading from "../../components/Heading";
import LogInForm from "../../components/LoginForm";

const LogIn = () => {
  return (
    <>
      <Navbar />
      <DefaultLayout>
        <Heading>Log In</Heading>
      </DefaultLayout>
      <CenterLayout>
        <LogInForm>Log in</LogInForm>
      </CenterLayout>
    </>
  );
};

export default LogIn;
