import { auth } from "@/auth";
import RegisterForm from "@/components/authentication/RegisterForm";
import MainContainer from "@/components/container/MainContainer";
import { redirect } from "next/navigation";

const Register = async () => {
  const { user } = await auth() || {};
  if (user) redirect("/");
  return (
    <MainContainer>
      {/* Register Form */}
      <RegisterForm />
    </MainContainer>
  );
};

export default Register;
