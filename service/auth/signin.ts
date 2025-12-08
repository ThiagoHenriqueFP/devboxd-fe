import * as SigninUsecase from "@/domain/auth/SigninUseCase";
import { User } from "@/domain/user";
import { api } from "@/lib/axios";
import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

export class SigninService {
  public static instance = new SigninService();

  constructor(private readonly axios = api) {}

  async perform(params: SigninUsecase.Request): Promise<User> {
    const response = await this.axios.post<SigninUsecase.Response>(
      "/auth/signin",
      params
    );

    const userRaw = jwtDecode<{ sub: string; id: number; email: string }>(
      response.data.body.token
    );

    setCookie("access_token", response.data.body.token, { path: "/" });

    return {
      id: userRaw.id,
      email: userRaw.email,
      username: userRaw.sub,
    };
  }
}
