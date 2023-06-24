import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBL2sJhyJh7EVF79BEBRGhzP9UR3EsdB1w",
  authDomain: "tech-talent-hub-8b134.firebaseapp.com",
  projectId: "tech-talent-hub-8b134",
  storageBucket: "tech-talent-hub-8b134.appspot.com",
  messagingSenderId: "646888273670",
  appId: "1:646888273670:web:e0641d1e0674cfce6c9087",
  measurementId: "G-3Z7CHW17QP",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Aquí se inicializa 'storage'

export { storage, app };
