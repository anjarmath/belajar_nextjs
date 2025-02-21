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
import { loginAction } from "@/action/auth-action";

// Skema validasi menggunakan Zod
const formSchema = z.object({
  username: z.string().min(2, "Username harus minimal 2 karakter"),
  password: z.string().min(5, "Password harus minimal 5 karakter"),
});

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await loginAction(data);
    if (res.error) {
      alert(res.error);
    }
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

          {/* Input Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label>Password</Label>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Masukkan Password"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tombol Submit */}
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Login..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
