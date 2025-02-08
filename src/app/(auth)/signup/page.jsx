"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// Skema validasi menggunakan Zod
const formSchema = z.object({
  username: z.string().min(2, "Username harus minimal 2 karakter"),
  name: z.string().min(2, "Nama harus minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
});

export default function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Data Form:", data);
  };

  return (
    <div className=" max-w-xl mx-auto px-4 py-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Input Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <Label>Username</Label>
                <FormControl>
                  <Input {...field} placeholder="Masukkan username" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Input Nama */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label>Nama</Label>
                <FormControl>
                  <Input {...field} placeholder="Masukkan nama" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Input Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Email</Label>
                <FormControl>
                  <Input {...field} placeholder="Masukkan email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tombol Submit */}
          <Button type="submit">Kirim</Button>
        </form>
      </Form>
    </div>
  );
}
