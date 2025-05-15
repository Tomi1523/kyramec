import { useState, useEffect } from 'react';
import { fetchTractores, fetchTractorById } from './firestoreService';

export const useTractores = () => {
  const [tractores, setTractores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTractores = async () => {
      try {
        const data = await fetchTractores();
        setTractores(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTractores();
  }, []);

  

  return { tractores, loading, error };
};

export const useTractorDetails = (id) => {
  const [tractor, setTractor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTractor = async () => {
      try {
        const data = await fetchTractorById(id);
        setTractor(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTractor();
  }, [id]);

  return { tractor, loading, error };
};
