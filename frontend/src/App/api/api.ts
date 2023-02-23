import { Post, PostId } from '../../Components/Posts/Types/types';

export const loadPosts = async (): Promise<Post[]> => {
  const res = await fetch('/api/posts');
  const data = await res.json();
  return data;
};

export const addPost = async (newPost: Post): Promise<Post> => {
  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: newPost.img,
      title: newPost.title,
      description: newPost.description,
    }),
  });
  return res.json();
};

export const delPost = async (id: PostId): Promise<PostId> => {
  const res = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const updatePost = async (post: Post): Promise<Post> => {
  const res = await fetch(`/api/Posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: post.img,
      title: post.title,
      description: post.description,
    }),
  });
  return res.json();
};
