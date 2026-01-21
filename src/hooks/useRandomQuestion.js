import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook untuk generate pertanyaan random
 * @param {Array} data - Array berisi data pertanyaan
 * @returns {string} - Pertanyaan random
 */
export const useRandomQuestion = (data) => {
  const location = useLocation();
  const [question, setQuestion] = useState('');

  useEffect(() => {
    if (data && data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuestion(data[randomIndex]);
    }
  }, [location.pathname, data]);

  return question;
};
