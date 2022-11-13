import Navbar from "../../components/Navbar/Navbar";
import DefaultLayout from "../../layouts/DefaultLayout";
import CenterLayout from "../../layouts/CenterLayout";
import Heading from "../../components/Heading";
import SingUpForm from "../../components/Singupform";

const SingUp = () => {
  return (
    <>
      <Navbar />
      <DefaultLayout>
        <Heading>Sing up</Heading>
      </DefaultLayout>
      <CenterLayout>
        <SingUpForm>Sing Up</SingUpForm>
      </CenterLayout>
    </>
  );
};

export default SingUp;
