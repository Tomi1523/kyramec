import { useState, useEffect } from 'react';
import { getRepuestos, getRepuestoById } from './firestoreService';

export const useRepuestos = (repuestoId = null) => {
  const [repuestos, setRepuestos] = useState([]);
  const [repuesto, setRepuesto] = useState(null); // Nuevo: repuesto individual
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔁 1. Traer todos los repuestos
  useEffect(() => {
    const fetchRepuestos = async () => {
      try {
        const repuestosData = await getRepuestos();
        setRepuestos(repuestosData);
      } catch (err) {
        setError("Error al obtener los repuestos.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepuestos();
  }, []);

  // 🔁 2. Traer un repuesto por ID (si se pasa un ID como argumento)
  useEffect(() => {
    const fetchRepuestoById = async () => {
      if (!repuestoId) return;

      setLoading(true);
      try {
        const data = await getRepuestoById(repuestoId);
        setRepuesto(data);
      } catch (err) {
        setError("Error al obtener el repuesto por ID.");
        setRepuesto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRepuestoById();
  }, [repuestoId]);

  return { repuestos, repuesto, loading, error };
};
