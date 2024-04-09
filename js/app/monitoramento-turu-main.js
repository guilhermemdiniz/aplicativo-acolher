
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "./app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const textoMonitoramento = document.getElementById('texto-monitoramento');
const botaoVoltar = document.querySelector('.arrow-left');

botaoVoltar.addEventListener('click', () => {
    window.location.href = '../../home.html';
})

//------------------------------------- REGRAS DE VISUALIZAÇÃO ---------------------------------------------

//CONTAINERS ÁREAS DA ESCOLA
const containerMindMakers = document.querySelector('.slide-mindmakers');
const containerSocioemocional = document.querySelector('.slide-socioemocional');
const containerParquinho = document.querySelector('.slide-parquinho');
const containerRefeitorio = document.querySelector('.slide-refeitorio');
const containerMultidisciplinar = document.querySelector('.slide-multidisciplinar');

//CONTAINERS SALAS DE AULA
const containerBercario = document.querySelector('.slide-bercario');
const containerInfantil1 = document.querySelector('.slide-infantil-1');
const containerInfantil2 = document.querySelector('.slide-infantil-2');
const containerInfantil2b = document.querySelector('slide-infantil-2b')
const containerInfantil3 = document.querySelector('.slide-infantil-3');
const containerInfantil4 = document.querySelector('.slide-infantil-4');
const containerPrimeiroAno = document.querySelector('.slide-primeiroano');
const containerSegundoAno = document.querySelector('.slide-segundoano');
const containerReforco = document.querySelector('.slide-reforco');
const containerMiniMaternal = document.querySelector('.slide-minimaternal');

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

        mostrarAreasDaEscolaNoMulticamerasTuru();
        verificarVisibilidadeEMostrarSalasDeAulaTuru(authenticatedUser);
    } else {
        console.log("No such document!");
        alert('esta página não pode ser acessada');
        window.location.href = '../../../index.html';
    }

    console.log(user);
  } else {
    console.log('não há usuário autenticado');
    alert('esta página não pode ser acessada');
    window.location.href = '../../../index.html';
  }
});

//AÇÕES DOS CONTAINERS

//ÁREAS DA ESCOLA
//--> MINDMAKERS
containerMindMakers.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/mindmakers-turu.html';
})

//--> SOCIOEMOCIONAL
containerSocioemocional.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/socioemocional-turu.html';
})

//--> PARQUINHO
containerParquinho.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/parquinho-turu.html';
})

//--> REFEITORIO
containerRefeitorio.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/refeitorio-turu.html';
})

//MULTIDISCIPLINAR
containerMultidisciplinar.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/multidisciplinar-turu.html';
})

//SALAS DE AULA
//--> BERÇÁRIO
containerBercario.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/bercario-turu.html';
})
//--> INFANTIL 1
containerInfantil1.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/infantil1-turu.html';
})
//--> INFANTIL 2
containerInfantil2.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/infantil2-turu.html';
})
//--> INFANTIL 3
containerInfantil3.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/infantil3-turu.html';
})
//--> INFANTIL 4
containerInfantil4.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/infantil4-turu.html';
})
//--> PRIMEIRO ANO
containerPrimeiroAno.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/primeiroano-turu.html';
})
//--> SEGUNDO ANO
containerSegundoAno.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/segundoano-turu.html';
})
//--> REFORÇO
containerReforco.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/reforco-turu.html';
})
//--> MINI MATERNAL
containerMiniMaternal.addEventListener('click', () => {
    window.location.href = '../../monitoramento/turu/minimaternal-turu.html';
})

//WILLIAN
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});

//PAGEVIEW
const areasEscola = document.querySelector('.areasdaescola')
console.log(areasEscola)

const salasAula = document.querySelector('.salasdeaula')
console.log(salasAula)

const multicameras = document.querySelector('.multicameras')
console.log(multicameras)

const buttonsMonitoramento = document.querySelectorAll('.buttons-monitoramento')
console.log(buttonsMonitoramento.length)

for (let index = 0; index < buttonsMonitoramento.length; index++) {
    buttonsMonitoramento[index].addEventListener('click', () => {
        // Remova a classe active de todos os botões
        buttonsMonitoramento.forEach(button => {
            button.classList.remove('active');
        });
        
        // Adicione a classe active apenas ao botão clicado
        buttonsMonitoramento[index].classList.add('active');

        if (buttonsMonitoramento[index].children[0].innerHTML === 'Salas de Aula') {
            salasAula.classList.remove('areas-none');
            areasEscola.classList.add('areas-none');
            multicameras.classList.add('areas-none');
        } else if (buttonsMonitoramento[index].children[0].innerHTML === 'Áreas da Escola') {
            salasAula.classList.add('areas-none');
            areasEscola.classList.remove('areas-none');
            multicameras.classList.add('areas-none');
        } else {
            salasAula.classList.add('areas-none');
            areasEscola.classList.add('areas-none');
            multicameras.classList.remove('areas-none');
        }
    });
}

//FUNCÕES MONITORAMENTO

//TURU
function mostrarAreasDaEscolaNoMulticamerasTuru() {
  const containerMulticameras = document.querySelector('.row-multicameras__item');
      containerMulticameras.innerHTML += `
      <!-- MINDMAKERS FALTANDO -->
        <div class="item__container item-mindmakers hidden">
          <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
            src="#" frameborder="0"
            allowfullscreen></iframe>
          <h1 class="item-titulo">Mind Makers</h1>
        </div>
      <!-- SOCIOEMOCIONAL -->
          <div class="item__container item-socioemocional">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20PLENO.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Socioemocional</h1>
          </div>
          <!-- PARQUINHO 1 -->
          <div class="item__container item-parquinho hidden">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/PARQUINHO%202%20.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Parquinho 1</h1>
          </div>
          <!-- PARQUINHO 2 -->
          <div class="item__container item-parquinho hidden">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/PARQUINHO%203.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Parquinho 2</h1>
          </div>
          <!-- PARQUINHO 3 -->
          <div class="item__container item-parquinho hidden">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20PARQUINHO%204.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Parquinho 3</h1>
          </div>
          <!-- REFEITÓRIO 1 -->
          <div class="item__container item-refeitorio">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20REFEITORIO.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Refeitório 1</h1>
          </div>
          <!-- REFEITÓRIO 2 -->
          <div class="item__container item-refeitorio">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20REFEITORIO2.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Refeitório 2</h1>
          </div>
          <!-- MULTIDISCIPLINAR -->
          <div class="item__container item-multidisciplinar">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20MULTIDISCIPLINAR.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Multidisciplinar</h1>
          </div>
      `;
}

function verificarVisibilidadeEMostrarSalasDeAulaTuru(authenticatedUser) {

  const containerMulticameras = document.querySelector('.row-multicameras__item');

  //BERCARIO
  if((authenticatedUser.data().isBercario || authenticatedUser.data().isAdmin)) {
      containerBercario.classList.add('swiper-slide');
      containerBercario.classList.remove('hidden');

      containerMulticameras.innerHTML += `
      <!-- BERÇÁRIO -->
          <div class="item__container item-bercario">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20BER%C3%87ARIO.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Berçário</h1>
          </div>
      <!-- SONO BERÇÁRIO -->
      <div class="item__container item-bercario">
        <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
          src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/SONO%20BER%C3%87ARIO.html" frameborder="0"
          allowfullscreen></iframe>
        <h1 class="item-titulo">Sono Berçário</h1>
      </div>
      `;
  }
  //INFANTIL 1
  if((authenticatedUser.data().isInfantil1 || authenticatedUser.data().isAdmin)) {
      containerInfantil1.classList.add('swiper-slide');
      containerInfantil1.classList.remove('hidden');

      containerMulticameras.innerHTML += `
      <!-- INFANTIL 1 -->
      <div class="item__container item-infantil-1">
        <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
          src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU-INFANTIL-1.html" frameborder="0"
          allowfullscreen></iframe>
        <h1 class="item-titulo">Infantil 1</h1>
      </div>
      `;
  }
  //INFANTIL 2
  if((authenticatedUser.data().isInfantil2 || authenticatedUser.data().isAdmin)) {
      containerInfantil2.classList.add('swiper-slide');
      containerInfantil2.classList.remove('hidden');

      containerMulticameras.innerHTML += `
      <!-- INFANTIL 2 -->
          <div class="item__container item-infantil-2">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU-INFANTIL-2.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Infantil 2</h1>
          </div>
      `;
  }
  //INFANTIL 2B
  if((authenticatedUser.data().isInfantil2B || authenticatedUser.data().isAdmin)) {
    containerInfantil2b.classList.add('swiper-slide');
    containerInfantil2b.classList.remove('hidden');

    containerMulticameras.innerHTML += `
    <!-- INFANTIL 2B -->
        <div class="item__container item-infantil-2b">
          <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
            src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20MATERNAL%202B.html" frameborder="0"
            allowfullscreen></iframe>
          <h1 class="item-titulo">Infantil 2B</h1>
        </div>
    `;
  }
  //INFANTIL 3
  if((authenticatedUser.data().isInfantil3 || authenticatedUser.data().isAdmin)) {
      containerInfantil3.classList.add('swiper-slide');
      containerInfantil3.classList.remove('hidden');

      containerMulticameras.innerHTML += `
      <!-- INFANTIL 3 -->
          <div class="item__container item-infantil-3">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU-INFANTIL-3.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Infantil 3</h1>
          </div>
      `;
  }
  //INFANTIL 4
  if((authenticatedUser.data().isInfantil4 || authenticatedUser.data().isAdmin)) {
      containerInfantil4.classList.add('swiper-slide');
      containerInfantil4.classList.remove('hidden');

      containerMulticameras.innerHTML += `
      <!-- INFANTIL 4 -->
          <div class="item__container item-infantil-4">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU-INFANTIL-4.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Infantil 4</h1>
          </div>
      `;
  }
  //PRIMEIRO ANO
  if((authenticatedUser.data().isPrimeiroAno || authenticatedUser.data().isAdmin)) {
      containerPrimeiroAno.classList.add('swiper-slide');
      containerPrimeiroAno.classList.remove('hidden');
      
      containerMulticameras.innerHTML += `
      <!-- PRIMEIRO ANO -->
          <div class="item__container item-primeiroano">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20PRIMEIRO%20ANO.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Primeiro Ano</h1>
          </div>
      `;
  }
  //SEGUNDO ANO
  if((authenticatedUser.data().isSegundoAno && authenticatedUser.data().isAdmin)) {
      containerSegundoAno.classList.add('swiper-slide');
      containerSegundoAno.classList.remove('hidden');

      containerMulticameras.innerHTML += `
      <!-- SEGUNDO ANO -->
          <div class="item__container item-segundoano">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20SEGUNDO%20ANO.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Segundo Ano</h1>
          </div>
      `;
  }
  //REFORCO
  if((authenticatedUser.data().isPrimeiroAno || authenticatedUser.data().isPrimeiroAnoB 
  || authenticatedUser.data().isSegundoAno || authenticatedUser.data().isSegundoAnoB 
  || authenticatedUser.data().isReforco) || authenticatedUser.data().isAdmin) {
      containerReforco.classList.add('swiper-slide');
      containerReforco.classList.remove('hidden');

      containerMulticameras.innerHTML += `
      <!-- REFORÇO -->
          <div class="item__container item-reforco">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br//CAMERAS%20TURU/TURU%20REFOR%C3%87O.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Reforço</h1>
          </div>
      `;
  }
  //MINI MATERNAL
  if(authenticatedUser.data().isMiniMaternal) {
      containerMiniMaternal.classList.add('swiper-slide');
      containerMiniMaternal.classList.remove('hidden');

      containerMulticameras.innerHTML += `
      <!-- MINI MATERNAL -->
          <div class="item__container item-minimaternal">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/TURU%20MINI%20MATERNAL.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Mini Maternal</h1>
          </div>
      <!-- REFEITÓRIO MINI -->
          <div class="item__container item-refeitoriomini">
            <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
              src="https://acolherservices.iconnecti.com.br/CAMERAS%20TURU/REFEI%C3%87AO%20MINI%20MATERNAL.html" frameborder="0"
              allowfullscreen></iframe>
            <h1 class="item-titulo">Refeitório Mini</h1>
          </div>
      `;
  }
}
