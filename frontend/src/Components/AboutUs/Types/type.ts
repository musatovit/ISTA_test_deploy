export type Description = {
  id?: number | undefined;
  body: string;
  img: string;
  userId?: number;
};

export type State = {
  descriptions: Description[];
  message: undefined | string;
};

export type DescriptionId = Description['id'];
