import DefaultLayout from "../../layouts/DefaultLayout";
import Navbar from "../../components/Navbar/Navbar";
import EditForm from "../../components/EditComment";

const Edit = () => {
  return (
    <>
      <Navbar title="Sing up" subtitle="Log in"></Navbar>
      <DefaultLayout>
        <EditForm />
      </DefaultLayout>
    </>
  );
};

export default Edit;
