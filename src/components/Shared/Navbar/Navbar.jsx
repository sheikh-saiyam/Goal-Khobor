import Image from "next/image";
import TopNavbar from "./TopNavbar";
import Link from "next/link";
import Login from "../../authentication/Login";

const Navbar = () => {
  return (
    <nav className="w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      {/* 1st Navbar */}
      <TopNavbar />
      {/* 2st Navbar */}
      <div className="py-4 flex items-center justify-between border-b-2 border-black">
        <Link href={"/"} className="hover:scale-105">
          <Image
            src={"./logo.svg"}
            alt="Taza Khobor"
            width={100}
            height={100}
          />
        </Link>
        {/* NavLinks */}
        <div className="flex gap-6 items-center font-semibold tracking-widest text-black">
          <Link
            href={"/"}
            prefetch={true}
            className="hover:underline underline-offset-2"
          >
            Home
          </Link>
          <Link
            href={"/news"}
            prefetch={true}
            className="hover:underline underline-offset-2"
          >
            All News
          </Link>
          <Link
            href={"/e-paper"}
            prefetch={true}
            className="hover:underline underline-offset-2"
          >
            E-paper
          </Link>
          <div>
            <Login />
          </div>
        </div>
      </div>
      {/* 3st Navbar */}
    </nav>
  );
};

export default Navbar;
