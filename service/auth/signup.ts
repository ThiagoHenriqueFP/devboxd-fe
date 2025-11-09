import * as SignupUseCase from "@/domain/auth/SignupUseCase";
import { api } from "@/lib/axios";
import { setCookie } from "cookies-next";

export class SignupService {
  public static instance = new SignupService();

  constructor(private readonly axios = api) {}

  async perform(params: SignupUseCase.Request) {
    await this.axios.post<void>("/auth/signup", params);
  }
}
