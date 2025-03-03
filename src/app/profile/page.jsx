import { auth } from "@/auth";
import MainContainer from "@/components/container/MainContainer";

const Profile = async () => {
  const session = await auth();
  return <MainContainer>{JSON.stringify(session?.user)}</MainContainer>;
};

export default Profile;
