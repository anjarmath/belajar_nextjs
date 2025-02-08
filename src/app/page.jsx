"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />

      <div className=" w-full h-screen flex flex-col gap-3 justify-center items-center">
        <Card>
          <CardHeader>
            <Image
              src={"/img/brokoli.jpg"}
              width={200}
              height={200}
              alt="Gambar Brokoli"
            />
            <CardTitle>Selamat Datang!</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>{counter}</CardContent>
          <CardFooter className=" space-x-3">
            <Button
              className=" w-full"
              onClick={() => {
                setCounter((prev) => prev + 1);
              }}
            >
              +
            </Button>
            <Button
              variant="destructive"
              className=" w-full"
              onClick={() => {
                setCounter((prev) => prev - 1);
              }}
            >
              -
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
