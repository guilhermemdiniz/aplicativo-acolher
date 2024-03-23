
//----------------- FUNÇÕES DE AUTENTICAÇÃO COM FIREBASE ---------------------

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "../app/app.js";

export const auth = getAuth(app);

export function login(email, senha) {
  signInWithEmailAndPassword(auth, email, senha)
  .then(response => {
    console.log('sucess', response);
    window.location.href = '../../pages/home.html';
  })
  .catch(error => {
    alert('Erro de autenticação.');
    console.log('error', error);
  });
}
