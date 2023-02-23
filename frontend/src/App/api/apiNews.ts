import { OneNews, NewsId } from '../../Components/News/Types/types';

export const loadNews = async (): Promise<OneNews[]> => {
  const res = await fetch('/api/news');
  const data = await res.json();
  return data;
};

export const addNews = async (newNews: OneNews): Promise<OneNews> => {
  const res = await fetch('/api/news', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: newNews.img,
      title: newNews.title,
      description: newNews.description,
      url: newNews.url,
    }),
  });
  return res.json();
};

export const delNews = async (id: NewsId): Promise<NewsId> => {
  const res = await fetch(`/api/news/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const updateNews = async (oneNews: OneNews): Promise<OneNews> => {
  const res = await fetch(`/api/news/${oneNews.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: oneNews.img,
      title: oneNews.title,
      description: oneNews.description,
      url: oneNews.url,
    }),
  });
  return res.json();
};
