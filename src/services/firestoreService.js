import { db } from "./firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc } from "firebase/firestore";

const tractoresRef = collection(db, "tractores");

export const fetchTractores = async () => {
  try {
    const querySnapshot = await getDocs(tractoresRef);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching tractores:", error);
    throw error;
  }
};





export const fetchTractorById = async (id) => {
  try {
    const docRef = doc(db, "tractores", id);
    const tractorDoc = await getDoc(docRef);
    if (tractorDoc.exists()) {
      return { id: tractorDoc.id, ...tractorDoc.data() };
    } else {
      throw new Error("Tractor no encontrado");
    }
  } catch (error) {
    console.error("Error fetching tractor details:", error);
    throw error;
  }
};


//Repuestos----
export const addRepuesto = async (repuestoData) => {
  const repuestosCollection = collection(db, 'repuestos');
  await addDoc(repuestosCollection, repuestoData);
};

export const getRepuestos = async () => {
  const repuestosCollection = collection(db, 'repuestos');
  const repuestosSnapshot = await getDocs(repuestosCollection);
  return repuestosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getRepuestoById = async (id) => {
  const repuestoDocRef = doc(db, 'repuestos', id);
  const repuestoSnapshot = await getDoc(repuestoDocRef);

  if (repuestoSnapshot.exists()) {
    return { id: repuestoSnapshot.id, ...repuestoSnapshot.data() };
  } else {
    throw new Error("Repuesto no encontrado");
  }
};

//Implementos-----

export const getImplementos = async () => {
  const implementosCollection = collection(db, 'implementos');
  const implementosSnapshot = await getDocs(implementosCollection);
  return implementosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getImplementoById = async (id) => {
  try {
    const docRef = doc(db, "implementos", id);
    const implementoDoc = await getDoc(docRef);
    if (implementoDoc.exists()) {
      return { id: implementoDoc.id, ...implementoDoc.data() };
    } else {
      throw new Error("Implemento no encontrado");
    }
  } catch (error) {
    console.error("Error fetching implemento details:", error);
    throw error;
  }
};