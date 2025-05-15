// useImplementos.js
import { useState, useEffect } from 'react';
import { getImplementos, getImplementoById } from './firestoreService';

export const useImplementos = () => {
  const [implementos, setImplementos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImplementos = async () => {
      try {
        const implementosData = await getImplementos();
        setImplementos(implementosData);
      } catch (err) {
        setError("Error al obtener los implementos.");
      } finally {
        setLoading(false);
      }
    };

    fetchImplementos();
  }, []);

  return { implementos, loading, error };
};

export const useImplemento = (id) => {
  const [implemento, setImplemento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImplemento = async () => {
      try {
        const implementoData = await getImplementoById(id);
        setImplemento(implementoData);
      } catch (err) {
        setError("Error al obtener el implemento.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchImplemento();
    }
  }, [id]);

  return { implemento, loading, error };
};
