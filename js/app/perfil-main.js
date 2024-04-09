
import { getAuth, onAuthStateChanged, updateProfile, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "../app/app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const auth = getAuth(app);
const storage = getStorage();

const textoFilhos = document.querySelector('.container__filhos');
const textoUnidades = document.querySelector('.container__unidades');
const textoNomeDeUsuario = document.querySelector('.container__nome-de-usuario');

const elementoFotoDePerfilDoUsuario = document.querySelector('#usuario-autenticado__foto-de-perfil');

const botaoAtualizarFotoDePerfil = document.getElementById('botao-upload');
const botaoCadastrarUsuario = document.getElementById('botao-cadastrar-usuario');
const botaoEditarUsuario = document.getElementById('botao-editar-usuario');
const botaoLogout = document.getElementById('botao-logout');

onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log('há usuário autenticado');
      const db = getFirestore(app);
  
      const authenticatedUserRef = doc(db, "users", user.uid);
      const authenticatedUser = await getDoc(authenticatedUserRef);
  
      if (authenticatedUser.exists()) {

        var fileItem;
        var fileName;

        document.getElementById('seletor-imagem').addEventListener('change', (event) => {
          fileItem = event.target.files[0];
          fileName = fileItem.name;
          atualizarFotoDePerfil(fileName, fileItem);
        })

        botaoLogout.addEventListener('click', () => {
            var usuarioDesejaSair = confirm('Tem certa que deseja sair?');
            if(usuarioDesejaSair) {
                logout();
            }
        })
        
        textoNomeDeUsuario.innerHTML = `
        ${authenticatedUser.data().display_name}
        `;
        textoFilhos.innerHTML = `
          Responsável por: <br>${authenticatedUser.data().filhos}
        `;
        textoUnidades.innerHTML = `
          Unidades: <br>${authenticatedUser.data().unidades}
        `;

        elementoFotoDePerfilDoUsuario.setAttribute("src", user.photoURL);

        if(authenticatedUser.data().isAdmin) {
            botaoCadastrarUsuario.classList.remove('hidden');
            botaoEditarUsuario.classList.remove('hidden');
            botaoCadastrarUsuario.addEventListener('click', () => {
                window.location.href = '../../pages/auth/cadastro.html';
            })
            botaoEditarUsuario.addEventListener('click', () => {
              window.location.href = '../../pages/auth/editar-usuario.html';
          })
        }
  
      } else {
          console.log("No such document!");
          alert('esta página não pode ser acessada');
          window.location.href = '../../index.html';
      }
  
    } else {
      console.log('não há usuário autenticado');
      alert('esta página não pode ser acessada');
      window.location.href = '../../index.html';
    }
  });

function atualizarFotoDePerfil(fileName, fileItem) {
  const upload = (items) => {
  const storageRef = ref(storage, `images/${fileName}`); // Use ref() para obter a referência ao arquivo

  const metadata = {
    contentType: 'image/jpeg',
  };

  uploadBytes(storageRef, fileItem, metadata)
  .then((snapshot) => {
    console.log(snapshot);
  }, (error) => {
    console.log("ERROR: " + error);
  })

  getDownloadURL(storageRef)
  .then((url) => {
    console.log("URL: " + url);
    const user = auth.currentUser;
    updateProfile(user, {
      photoURL: url
    }).then(() => {
      elementoFotoDePerfilDoUsuario.setAttribute("src", url);
      console.log("Perfil do usuário atualizado com sucesso!");
    }).catch((error) => {
      console.error("Erro ao atualizar o perfil do usuário:", error);
      alert("Erro ao carregar nova foto de perfil.");
    });
  });

};
  
  upload(fileItem);
  console.log('entrar com a foto...');
}

function logout() {
    signOut(auth)
    .then(() => {
        console.log('signing out...');
    }).catch((error) => {
        console.log(error.message);
    });
}
