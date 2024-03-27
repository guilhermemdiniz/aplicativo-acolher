
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "../app/app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const elementoBemVindo = document.querySelector('.home__bem-vindo');
const auth = getAuth(app);

//--------------------------- REGRAS DE VISUALIZAÇÃO ---------------------------

//BOTÕES DAS UNIDADES
const containerCohafuma = document.getElementById('unidade-cohafuma');
const containerCohatrac = document.getElementById('unidade-cohatrac');
const containerTuru = document.getElementById('unidade-turu');

containerCohafuma.addEventListener('click', () => {
  window.location.href = '../../pages/monitoramento/main/monitoramento-cohafuma.html';
})

containerCohatrac.addEventListener('click', () => {
  window.location.href = '../../pages/monitoramento/main/monitoramento-cohatrac.html';
})

containerTuru.addEventListener('click', () => {
  window.location.href = '../../pages/monitoramento/main/monitoramento-turu.html';
})

//VERIFICAR VISIBILIDADE
onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log('há usuário autenticado');
    const db = getFirestore(app);

    const authenticatedUserRef = doc(db, "users", user.uid);
    const authenticatedUser = await getDoc(authenticatedUserRef);

    console.log(user);

    if (authenticatedUser.exists()) {
        console.log("Document data:", authenticatedUser.data());
        elementoBemVindo.innerHTML = `
        Bem-vindo de volta, <br/>${authenticatedUser.data().display_name}
        `;

        document.querySelector('.usuario-autenticado__foto-de-perfil').setAttribute("src", authenticatedUser.data().display_name)

        //COHAFUMA
        if(!(authenticatedUser.data().isPaiCohafuma || authenticatedUser.data().isAdmin)) {
          containerCohafuma.classList.add('hidden');
        }
        //COHATRAC
        if(!(authenticatedUser.data().isPaiCohatrac || authenticatedUser.data().isAdmin)) {
          containerCohatrac.classList.add('hidden');
        //TURU
        }if(!(authenticatedUser.data().isPaiTuru || authenticatedUser.data().isAdmin)) {
          containerTuru.classList.add('hidden');
        }
    } else {
        console.log("No such document!");
        alert('esta página não pode ser acessada');
        window.location.href = '../../index.html';
    }

    console.log(user);
  } else {
    console.log('não há usuário autenticado');
    alert('esta página não pode ser acessada');
    window.location.href = '../../index.html';
  }
});
