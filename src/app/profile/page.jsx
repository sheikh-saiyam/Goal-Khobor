import { auth } from "@/auth";
import MainContainer from "@/components/container/MainContainer";
import { Button } from "@/components/ui/button";

const Profile = async () => {
  const session = await auth();
  const { email, name, id, role } = session?.user || {};
  
  return (
    <MainContainer>
      <div className="py-12">
        <div className="pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mt-3 tracking-widest font-semibold">
            Welcome{" "}
            <span className="border-b-4 border-black my-0 py-0">To Your</span>{" "}
            Profile
          </h1>
        </div>
        {/* profile container */}
        <div className="px-6 py-10 shadow rounded border lg:w-2/3 flex flex-wrap gap-6">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold tracking-wider">
              Role: <span className="font-medium">{role}</span>
            </h1>
            <h1 className="text-xl font-semibold tracking-wider">
              Username: <span className="font-medium">{name}</span>
            </h1>
            <h1 className="text-xl font-semibold tracking-wider pb-1">
              Email:{" "}
              <span className="text-sm sm:text-xl font-medium">{email}</span>
            </h1>
            <h1 className="text-xl font-semibold tracking-wider pb-1">
              UID: <span className="text-sm sm:text-xl font-medium">{id}</span>
            </h1>
            <Button type="submit">Edit Profile</Button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Profile;
