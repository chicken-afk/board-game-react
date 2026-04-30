const BASE_URL = 'http://109.123.232.134:8085/api/v1';

export const fetchCards = async () => {
  const response = await fetch(`${BASE_URL}/cards`);
  if (!response.ok) throw new Error('Gagal mengambil data kartu');
  const json = await response.json();
  if (!json.success) throw new Error('Gagal mengambil data kartu');
  return json.data;
};

export const fetchCardQuestions = async (cardId) => {
  const response = await fetch(`${BASE_URL}/cards/${cardId}/questions`);
  if (!response.ok) throw new Error('Gagal mengambil pertanyaan');
  const json = await response.json();
  if (!json.success) throw new Error('Gagal mengambil pertanyaan');
  return json.data;
};
