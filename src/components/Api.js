export const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZD3jpP45eLG5ab1SnLVo/books';

const bookCreate = async (id, bookTitle, category) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title: bookTitle,
      category,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  const data = await response.text();
  return data;
};

export const bookDeleteAPI = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};

export default bookCreate;