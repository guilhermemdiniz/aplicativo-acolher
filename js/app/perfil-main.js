
import { getAuth, onAuthStateChanged, updateProfile, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "../app/app.js";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const auth = getAuth(app);
const storage = getStorage();

const db = getFirestore(app);

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
  const upload = () => {
  const user = auth.currentUser;
  const fotoDePerfilRef = ref(storage, `users/${user.uid}/uploads/${fileName}`);
  const storageRef = ref(storage);
  const pastaRef = ref(storageRef, 'images');

  const metadata = {
    contentType: 'image/jpeg',
  };

  listAll(pastaRef).then((result) => {
    result.items.forEach((itemRef) => {
      deleteObject(itemRef).then(() => {
        // File deleted successfully
        console.log('Sucesso ao deletar arquivo.');
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log('Erro ao deletar arquivo');
      })
    })
  }).catch((error) => {
    console.error('Erro ao listar arquivos:', error);
  });

  uploadBytes(fotoDePerfilRef, fileItem, metadata)
  .then((snapshot) => {
    console.log(snapshot);
    getDownloadURL(fotoDePerfilRef)
    .then((url) => {

      console.log("URL: " + url);

      const user = auth.currentUser;

      updateProfile(user, {
        photoURL: url
      })
      .then(() => {
        updateDoc(doc(db, "users", user.uid), {
          photo_url: user.photoURL
        })
        .then(
          elementoFotoDePerfilDoUsuario.setAttribute("src", url),
          console.log("Perfil do usuário atualizado com sucesso!")
        )
        .catch((error) => {
          console.log(error.message)
        });
      })
      .catch((error) => {
        console.error("Erro ao atualizar o perfil do usuário:", error);
        alert("Erro ao carregar nova foto de perfil.");
    });
  });
  }, (error) => {
    console.log("ERROR: " + error);
  })

};
  
  upload();
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
