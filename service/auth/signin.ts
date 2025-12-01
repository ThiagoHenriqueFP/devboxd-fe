import * as SigninUsecase from "@/domain/auth/SigninUseCase";
import { api } from "@/lib/axios";
import { setCookie } from "cookies-next";

export class SigninService {
  public static instance = new SigninService();

  constructor(private readonly axios = api) {}

  async perform(params: SigninUsecase.Request) {
    const response = await this.axios.post<SigninUsecase.Response>(
      "/auth/signin",
      params
    );

    setCookie("access_token", response.data.body.token, { path: "/" });
  }
}
