"use client";
import { SignupService } from "@/service/auth/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export default function Signin() {
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
    .refine((data) => data.password !== data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Password doesnt match",
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
        password: data.password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form>
      <div className="*:p-4">
        <div>
          <input type="text" placeholder="Username" {...register("username")} />
          <span>{errors.username?.message}</span>
        </div>
        <div>
          <input type="text" placeholder="Email" {...register("email")} />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <input type="text" placeholder="Password" {...register("password")} />
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
        </div>
      </div>
      <button onClick={handleSubmit(handleSignup)}>Register</button>
    </form>
  );
}
