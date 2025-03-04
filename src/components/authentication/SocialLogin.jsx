import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
const SocialLogin = () => {
  return (
    <>
      <div className="mt-5 text-center text-sm text-gray-900">
        OR CONTINUE WITH
      </div>
      <div className="mt-4 flex gap-4 justify-center">
        <form
          className="w-full"
        >
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 font-medium"
          >
            <FaGoogle /> Google
          </Button>
        </form>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 font-medium"
        >
          <FaGithub /> Github
        </Button>
      </div>
    </>
  );
};

export default SocialLogin;
