import { auth } from "@/auth";
import LoginForm from "@/components/authentication/LoginForm";
import MainContainer from "@/components/container/MainContainer";
import { redirect } from "next/navigation";

const Login = async () => {
  const { user } = await auth() || {};
  if (user) redirect("/");
  return (
    <MainContainer>
      {/* Login Form */}
      <LoginForm />
    </MainContainer>
  );
};

export default Login;
