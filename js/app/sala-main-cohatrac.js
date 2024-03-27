
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "./app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const botaoVoltar = document.querySelector('.arrow-left');

botaoVoltar.addEventListener('click', () => {
    window.location.href = '../../monitoramento/main/monitoramento-cohatrac.html';
})

//VERIFICAR VISIBILIDADE
const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log('há usuário autenticado');
      const db = getFirestore(app);
  
      const authenticatedUserRef = doc(db, "users", user.uid);
      const authenticatedUser = await getDoc(authenticatedUserRef);
  
      if (authenticatedUser.exists()) {
          console.log("Document data:", authenticatedUser.data());
          console.log(authenticatedUser.data().isRefeitorio);
          textoMonitoramento.textContent = `
          Acompanhe o desenvolvimento escolar de ${authenticatedUser.data().filhos} com o nosso sistema de monitoramento ao vivo
          `;
          //BERCARIO
          if(!authenticatedUser.data().isBercario) {
              containerBercario.classList.remove('swiper-slide');
              containerBercario.classList.add('hidden');
  
              webViewBercario.classList.add('hidden');
          }
          //INFANTIL 1
          if(!authenticatedUser.data().isInfantil1) {
              containerInfantil1.classList.remove('swiper-slide');
              containerInfantil1.classList.add('hidden');
  
              webViewInfantil1.classList.add('hidden');
          }
          //INFANTIL 1B
          if(!authenticatedUser.data().isInfantil1B) {
              containerInfantil1B.classList.remove('swiper-slide');
              containerInfantil1B.classList.add('hidden');
  
              webViewInfantil1B.classList.add('hidden');
          }
          //INFANTIL 2
          if(!authenticatedUser.data().isInfantil2) {
              containerInfantil2.classList.remove('swiper-slide');
              containerInfantil2.classList.add('hidden');
  
              webViewInfantil2.classList.add('hidden');
          }
          //INFANTIL 2B
          if(!authenticatedUser.data().isInfantil2B) {
              containerInfantil2B.classList.remove('swiper-slide');
              containerInfantil2B.classList.add('hidden');
  
              webViewInfantil2B.classList.add('hidden');
          }
          //INFANTIL 3
          if(!authenticatedUser.data().isInfantil3) {
              containerInfantil3.classList.remove('swiper-slide');
              containerInfantil3.classList.add('hidden');
  
              webViewInfantil3.classList.add('hidden');
          }
          //INFANTIL 3B 
          if(!authenticatedUser.data().isInfantil3B) {
              containerInfantil3B.classList.remove('swiper-slide');
              containerInfantil3B.classList.add('hidden');
  
              webViewInfantil3B.classList.add('hidden');
          }
          //INFANTIL 4
          if(!authenticatedUser.data().isInfantil4) {
              containerInfantil4.classList.remove('swiper-slide');
              containerInfantil4.classList.add('hidden');
  
              webViewInfantil4.classList.add('hidden');
          }
          //INFANTIL 4B
          if(!authenticatedUser.data().isInfantil4B) {
              containerInfantil4B.classList.remove('swiper-slide');
              containerInfantil4B.classList.add('hidden');
  
              webViewInfantil4B.classList.add('hidden');
          }
          //PRIMEIRO ANO
          if(!authenticatedUser.data().isPrimeiroAno) {
              containerPrimeiroAno.classList.remove('swiper-slide');
              containerPrimeiroAno.classList.add('hidden');
              
              webViewPrimeiroAno.classList.add('hidden');
          }
          //PRIMEIRO ANO B
          if(!authenticatedUser.data().isPrimeiroAnoB) {
              containerPrimeiroAnoB.classList.remove('swiper-slide');
              containerPrimeiroAnoB.classList.add('hidden');
  
              webViewPrimeiroAnoB.classList.add('hidden');
          }
          //SEGUNDO ANO
          if(!authenticatedUser.data().isSegundoAno) {
              containerSegundoAno.classList.remove('swiper-slide');
              containerSegundoAno.classList.add('hidden');
  
              webViewSegundoAno.classList.add('hidden');
          }
          //SEGUNDO ANO B
          if(!authenticatedUser.data().isSegundoAnoB) {
              containerSegundoAnoB.classList.remove('swiper-slide');
              containerSegundoAnoB.classList.add('hidden');
  
              webViewSegundoAnoB.classList.add('hidden');
          }
          //REFORCO
          if(!(authenticatedUser.data().isPrimeiroAno || authenticatedUser.data().isPrimeiroAnoB 
          || authenticatedUser.data().isSegundoAno || authenticatedUser.data().isSegundoAnoB 
          || authenticatedUser.data().isReforco)) {
              containerReforco.classList.remove('swiper-slide');
              containerReforco.classList.add('hidden');
  
              webViewReforco.classList.add('hidden');
          }
          //MINI MATERNAL
          if(!authenticatedUser.data().isMiniMaternal) {
              containerMiniMaternal.classList.remove('swiper-slide');
              containerMiniMaternal.classList.add('hidden');
  
  
              webViewMiniMaternal.classList.add('hidden');
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
