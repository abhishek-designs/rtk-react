export type User = {
  id: number | string;
  username: string;
  email: string;
};

export type AuthUserState = {
  token: string;
  refreshToken: string;
  isLoggedin: boolean;
  user: Partial<User>;
};

export type LoginPayload = Omit<AuthUserState, "user | isLoggedin">;

export type FetchUsersType = {
  msg: string;
  data: User[];
  count: number;
};
