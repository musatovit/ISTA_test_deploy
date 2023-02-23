export type Emailform = {
  id?: number;
  email: string;
};

export type State = {
  emails: Emailform[] | undefined;
  message: string | undefined;
};
