
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "../app/app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const elementoBemVindo = document.querySelector('.home__bem-vindo');
const auth = getAuth(app);

const storage = getStorage();

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

        console.log(user.uid);
        const fotoDePerfilRef = ref(storage, `users/${user.uid}/uploads/1704754467751000.jpg`);
        console.log(fotoDePerfilRef.root);

        document.querySelector('.usuario-autenticado__foto-de-perfil').setAttribute("src", user.photoURL);

        //const foto = 'https://firebasestorage.googleapis.com/v0/b/app-teste-web.appspot.com/o/users%2FZVRmELIJuxcS7kA8yjN2WqE7RaC2%2Fuploads%2F1704754467751000.jpg?alt=media&token=4029b385-295e-411f-a02b-5c1f3a92e26a';//fotoDePerfilRef;
        //authenticatedUser.photoURL = foto;
        console.log(fotoDePerfilRef);

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
