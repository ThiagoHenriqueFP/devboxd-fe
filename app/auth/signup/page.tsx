"use client";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/VariantButton";
import { SignupService } from "@/service/auth/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

export default function Signin() {
  const router = useRouter();
  const SignupSchema = z
    .object({
      username: z
        .string()
        .min(3, "username must have minimun 3 letters")
        .max(32, "username must have at maximum of 32 letters"),
      email: z.email(),
      password: z
        .string()
        .min(5, "password must have a minimum of five letters")
        .max(32, "username must have at maximum of 32 letters"),
      confirmPassword: z
        .string()
        .min(5, "password must have a minimum of five letters")
        .max(32, "username must have at maximum of 32 letters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Password doesn't match",
    });

  type signupSchema = z.infer<typeof SignupSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupSchema>({
    resolver: zodResolver(SignupSchema),
  });

  async function handleSignup(data: signupSchema) {
    try {
      await SignupService.instance.perform({
        email: data.email,
        username: data.username,
        passwd: data.password,
      });

      setInterval(() => router.push("/auth/signin"), 500);
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
          <Input type="text" placeholder="Email" {...register("email")} />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
        </div>
      </div>
      <Button
        className="mt-4"
        onClick={handleSubmit(handleSignup)}
        variant="primary"
      >
        Register
      </Button>
    </form>
  );
}
