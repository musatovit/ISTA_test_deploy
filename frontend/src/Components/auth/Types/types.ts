export type User = {
  id?: number;
  userName: string;
  password?: string;
};
export type State = {
  user: User | {};
  message: string | undefined;
  messages: string | undefined;
};
export type PayloadUser = {
  user?: User;
  message?: string;
  messages?: string;
};
