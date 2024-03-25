
import { login, auth } from "../firebase/firebase-auth.js";
import { app } from "../app/app.js";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const formulario = document.querySelector('.login__formulario');
const botaoLogout = document.getElementById('botao__logout');
var usuarioAutenticado = false;

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    var formEmail= document.getElementById('formulario_email').value;
    var formSenha = document.getElementById('formulario_senha').value;
    login(formEmail, formSenha);
  });

export const authenticatedUser = auth.currentUser;

onAuthStateChanged(auth, (user) => {
  console.log('auth sate changed')
  if (user) {
    const uid = user.uid;
    console.log(user);
    window.location.href = '../../pages/home.html';
    usuarioAutenticado = true;
  } else {;
    console.log("não autenticado");
    usuarioAutenticado = false;
  }
});

// botaoLogout.addEventListener('click', () => {
//   signOut(auth).then(() => {
//     console.log("logout realizado.");
//   })
//   .catch(() => {
//     console.log("erro de logout.");
//   })
// });

const botaoCadastro = document.getElementById('botao__cadastro');

const db = getFirestore(app);

// botaoCadastro.addEventListener('click', () => {
//   const formData = {
//     email: 'guilherme.md@discente.ufma.br',
//     senha: '123456',
//     display_name: 'Guilherme'
//   }
//   createUserWithEmailAndPassword(auth, formData.email, formData.senha)
//   .then(async data => {
//     await setDoc(doc(db, "users", data.user.uid), {
//       email: formData.email,
//       senha: formData.senha,
//       display_name: formData.display_name
//     })
//     .then(console.log('usuário cadastrado com sucesso'));
//   })
//   .catch(error => {
//     if (error === 'auth/email-already-in-use') {
//       alert('esse email já está em uso');
//     } else {
//       alert(error.message);
//     }
//     console.log(error);
//   });
// })

// await setDoc(doc(db, "users", "LA"), {
//   display_name: "Guilherme",
// });
