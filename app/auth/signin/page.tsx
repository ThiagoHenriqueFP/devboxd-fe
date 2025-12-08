"use client";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/VariantButton";
import { useUserContext } from "@/context/contexts/UserContext";
import { toastMessage } from "@/lib/toast";
import { SigninService } from "@/service/auth/signin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

export default function Signin() {
  const { login } = useUserContext();
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
      const user = await SigninService.instance.perform({
        username: data.username,
        password: data.password,
      });

      login(user);

      router.push("/");
    } catch (e) {
      if (e instanceof Error)
        toastMessage({
          message: e.message,
          type: "error",
        });
    }
  }

  return (
    <div>
      <div className="mb-8 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">DevBoxd</h1>
        <span className="font-semibold">
          Interaja com os projetos de outros devs
        </span>
      </div>
      <form className="flex flex-col items-center">
        <div className="*:mt-3">
          <div>
            <Input
              className="bg-neutral-700"
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            <span className="text-sm block min-h-5">
              {errors.username?.message}
            </span>
          </div>
          <div>
            <Input
              className="bg-neutral-700"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <span className="text-sm block min-h-5">
              {errors.password?.message}
            </span>
          </div>
        </div>
        <Button
          className="mt-2 w-32"
          onClick={handleSubmit(handleSignin)}
          variant="primary"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
