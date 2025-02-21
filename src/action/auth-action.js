"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(user) {
  const c = await cookies();

  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  //   Jika response dari API tidak 200 OK kita kembalikan pesan errornya
  if (!res.ok) {
    return { error: data.message };
  }

  //   Kita perlu simpan token ke cookies
  c.set("accessToken", data.accessToken);
  //   Sampai sini asumsikan login berhasil, maka kita redirect langsung ke halaman dashboard
  redirect("/dashboard");
}

export async function getUserAction() {
  const c = await cookies();
  //   Kita ambil token yang sebelumnya kita simpan
  const token = c.get("accessToken");

  const res = await fetch("https://dummyjson.com/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });

  const data = await res.json();

  //   Jika response dari API tidak 200 OK kita kembalikan pesan errornya
  if (!res.ok) {
    return { error: data.message };
  }

  return { user: data };
}
