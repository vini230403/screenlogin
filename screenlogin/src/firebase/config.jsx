
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD4NcLvKfXEWsDoCTIv_iGFEGvDjgnSjkE",
  authDomain: "screen-login-ef0d2.firebaseapp.com",
  projectId: "screen-login-ef0d2",
  storageBucket: "screen-login-ef0d2.firebasestorage.app",
  messagingSenderId: "529221745791",
  appId: "1:529221745791:web:55633c817d2548e5fed34a",
  measurementId: "G-FFXM1HVK4L"
}

// Inicialize o Firebase
const app = initializeApp(firebaseConfig)

// Exporte o módulo de autenticação
export const auth = getAuth(app)