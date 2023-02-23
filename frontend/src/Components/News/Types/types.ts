export type OneNews = {
  id?: number | undefined;
  img: string;
  title: string;
  description: string;
  url: string;
  userId?: number;
};
export type State = {
  news: OneNews[];
  message: undefined | string;
};
export type NewsId = OneNews['id'];
