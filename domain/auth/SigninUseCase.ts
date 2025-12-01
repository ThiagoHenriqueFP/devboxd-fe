export type Request = {
  username: string;
  password: string;
};

export type Response = {
  body: {
    token: string;
    type: "bearer";
  };
};
