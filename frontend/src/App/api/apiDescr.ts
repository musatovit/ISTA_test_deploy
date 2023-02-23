import { Description, DescriptionId } from '../../Components/AboutUs/Types/type';

export const loadDescription = async (): Promise<Description[]> => {
  const res = await fetch('/api/about');
  const data = await res.json();
  return data;
};

export const addDescription = async (description: Description): Promise<Description> => {
  const res = await fetch('/api/about', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      img: description.img,
      body: description.body,
    }),
  });
  return res.json();
};

export const delDescription = async (id: DescriptionId): Promise<DescriptionId> => {
  const res = await fetch(`/api/about/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const updateDescription = async (
  description: Description
): Promise<Description> => {
  const res = await fetch(`/api/about/${description.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: description.id,
      img: description.img,
      body: description.body,
    }),
  });
  return res.json();
};
