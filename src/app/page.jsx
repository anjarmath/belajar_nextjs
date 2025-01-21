"use client";
import MyButton from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div className=" w-full h-screen flex flex-col gap-3 justify-center items-center">
      <Image
        src={"/img/brokoli.jpg"}
        width={200}
        height={200}
        alt="Gambar Brokoli"
      />
      <h1 className=" font-bold text-xl">Selamat Datang!</h1>

      {counter}
      <MyButton
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Coba Tombol
      </MyButton>
    </div>
  );
}
