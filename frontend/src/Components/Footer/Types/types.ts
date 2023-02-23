export type NewMessage = {
  msg: string;
};
export type PhoneForm = {
  id?: number;
  phone: string;
};

export type State = {
  phones: PhoneForm[] | undefined;
  message: string | undefined;
};
