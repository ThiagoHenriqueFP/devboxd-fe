"use client";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/VariantButton";
import { SigninService } from "@/service/auth/signin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

export default function Signin() {
  const router = useRouter();
  const SigninSchema = z.object({
    username: z
      .string()
      .min(3, "username must have minimun 3 letters")
      .max(32, "username must have at maximum of 32 letters"),
    password: z
      .string()
      .min(5, "password must have a minimum of five letters")
      .max(32, "username must have at maximum of 32 letters"),
  });

  type signinSchema = z.infer<typeof SigninSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinSchema>({
    resolver: zodResolver(SigninSchema),
  });

  async function handleSignin(data: signinSchema) {
    try {
      await SigninService.instance.perform({
        username: data.username,
        password: data.password,
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form className="flex flex-col items-center">
      <div className="*:m-4">
        <div>
          <Input type="text" placeholder="Username" {...register("username")} />
          <span>{errors.username?.message}</span>
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>
      </div>
      <Button className="mt-4" onClick={handleSubmit(handleSignin)}>
        Login
      </Button>
    </form>
  );
}
