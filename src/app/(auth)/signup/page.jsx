import MyButton from "@/components/Button";
import React from "react";

const SignupPage = () => {
  const onSubmit = async (formData) => {
    "use server";
    console.log(formData);
  };
  return (
    <div className=" px-6 py-4">
      <div className=" space-y-3 max-w-2xl mx-auto">
        <h1 className=" font-bold text-xl">Daftar Akun</h1>
        <form action={onSubmit} className=" flex flex-col gap-3">
          <input
            placeholder="Username"
            id="username"
            name="username"
            type="text"
            required
            className=" border-2"
          />
          <input
            placeholder="Nama Lengkap"
            id="name"
            name="name"
            type="text"
            required
            className=" border-2"
          />

          <MyButton>Daftar</MyButton>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
