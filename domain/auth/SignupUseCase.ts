export type Request = {
  username: string;
  password: string;
  email: string;
};

export type Response = {
  token: string;
  type: "bearer";
};
