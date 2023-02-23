export type Post = {
  id?: number | undefined;
  img: string;
  title: string;
  description: string;
  userId?: number;
};
export type State = {
  posts: Post[];
  error?: undefined | string;
};

export type PostId = Post['id'];
