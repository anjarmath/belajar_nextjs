import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className=" bg-blue-500 w-full flex gap-4 justify-between items-center px-6 py-3 sticky top-0">
      <Link className=" font-bold text-lg text-white" href={"/"}>
        HOME
      </Link>

      <div className=" flex gap-4 items-center">
        <Link href={"/blog"} className=" underline">
          Blog
        </Link>
        <Link href={"/login"} className=" font-bold underline">
          Login
        </Link>
        <Link href={"/signup"} className=" font-bold underline">
          Daftar
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
