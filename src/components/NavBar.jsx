import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className=" bg-primary w-full flex gap-4 justify-between items-center px-6 py-3 sticky top-0">
      <Link className=" font-bold text-lg text-white" href={"/"}>
        HOME
      </Link>

      <div className=" flex gap-4 items-center">
        <Link href={"/blog"} className=" underline">
          Blog
        </Link>
        <Link href={"/login"} className=" font-bold underline">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href={"/signup"} className=" font-bold underline">
          <Button variant="outline">Daftar</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
