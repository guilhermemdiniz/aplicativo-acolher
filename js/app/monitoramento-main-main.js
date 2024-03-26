
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "../app/app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
// });

const textoMonitoramento = document.getElementById('texto-monitoramento');
const botaoVoltar = document.querySelector('.arrow-left');

botaoVoltar.addEventListener('click', () => {
    window.location.href = '../../home.html';
})

//------------------------------------- REGRAS DE VISUALIZAÇÃO ---------------------------------------------

//CONTAINERS ÁREAS DA ESCOLA
const containerMindMakers = document.querySelector('.slide-mindmakers');
const containerSocioemocional = document.querySelector('.slide-socioemocional');
const containerMultidisciplinar = document.querySelector('.slide-multidisciplinar');
const containerParquinho = document.querySelector('.slide-parquinho');
const containerRefeitorio = document.querySelector('.slide-refeitorio');
const containerBrinquedoteca = document.querySelector('.slide-brinquedoteca');

//CONTAINERS SALAS DE AULA
const containerBercario = document.querySelector('.slide-bercario');
const containerInfantil1 = document.querySelector('.slide-infantil-1');
const containerInfantil1B = document.querySelector('.slide-infantil-1b');
const containerInfantil2 = document.querySelector('.slide-infantil-2');
const containerInfantil2B = document.querySelector('.slide-infantil-2b');
const containerInfantil3 = document.querySelector('.slide-infantil-3');
const containerInfantil3B = document.querySelector('.slide-infantil-3b');
const containerInfantil4 = document.querySelector('.slide-infantil-4');
const containerInfantil4B = document.querySelector('.slide-infantil-4b');
const containerPrimeiroAno = document.querySelector('.slide-primeiroano');
const containerPrimeiroAnoB = document.querySelector('.slide-primeiroanob');
const containerSegundoAno = document.querySelector('.slide-segundoano');
const containerSegundoAnoB = document.querySelector('.slide-segundoanob');
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

        mostrarAreasDaEscolaNoMulticameras();
        verificarVisibilidadeEMostrarSalasDeAula(authenticatedUser);
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
    window.location.href = '../../monitoramento/cohafuma/mindmakers-cohafuma.html';
})

//--> SOCIOEMOCIONAL
containerSocioemocional.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/socioemocional-cohafuma.html';
})

//--> MULTIDISCIPLINAR
containerMultidisciplinar.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/multidisciplinar-cohafuma.html';
})

//--> PARQUINHO
containerParquinho.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/parquinho-cohafuma.html';
})

//--> REFEITORIO
containerRefeitorio.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})

//--> BRINQUEDOTECA
containerBrinquedoteca.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})


//SALAS DE AULA
//--> BERÇÁRIO
containerBercario.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/bercario-cohafuma.html';
})
//--> INFANTIL 1
containerInfantil1.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/infantil1-cohafuma.html';
})
//--> INFANTIL 1B
containerInfantil1B.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/infantil1b-cohafuma.html';
})
//--> INFANTIL 2
containerInfantil2.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/infantil2-cohafuma.html';
})
//--> INFANTIL 2B
containerInfantil2B.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/infantil2b-cohafuma.html';
})
//--> INFANTIL 3
containerInfantil3.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/infantil3-cohafuma.html';
})
//--> INFANTIL 3B
containerInfantil3B.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/infantil3b-cohafuma.html';
})
//--> INFANTIL 4
containerInfantil4.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/infantil4-cohafuma.html';
})
//--> INFANTIL 4B
containerInfantil4B.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/infantil4b-cohafuma.html';
})
//--> PRIMEIRO ANO
containerPrimeiroAno.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/primeiroano-cohafuma.html';
})
//--> PRIMEIRO ANO B
containerPrimeiroAnoB.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/primeiroanob-cohafuma.html';
})
//--> SEGUNDO ANO
containerSegundoAno.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/segundoano-cohafuma.html';
})
//--> SEGUNDO ANO B
containerSegundoAnoB.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/segundoanob-cohafuma.html';
})
//--> REFORÇO
containerReforco.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/reforco-cohafuma.html';
})
//--> MINI MATERNAL
containerMiniMaternal.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/minimaternal-cohafuma.html';
})


// //------------------------------------- PAGEVIEW MAIN ---------------------------------------------

// //VARIAVEIS DA PAGEVIEW
// const botoesPageViewLista = document.querySelectorAll('.botoes__page-view__item');
// const pageViewPages = document.querySelectorAll('.pageView-page');

// //ACOES DOS BOTOES DA PAGEVIEW
// botoesPageViewLista.forEach((botao) => {
//     botao.addEventListener('click', () => {
//         botoesPageViewLista.forEach((botao) => {
//             botao.classList.remove('active');
//         })
//         botao.classList.add('active');
//         pageViewPages.forEach((page) => {
//             page.classList.remove('hidden');
//         })
//         pageViewPages.forEach((page) => {
//             if(page.classList[0] != botao.classList[0]) {
//                 page.classList.add('hidden');
//             } 
//         })
//     })
// })

//WILLIAN
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});

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

function mostrarAreasDaEscolaNoMulticameras() {
    const containerMulticameras = document.querySelector('.row-multicameras__item');
        containerMulticameras.innerHTML += `
        <!-- SOCIOEMOCIONAL -->
            <div class="item__container item-socioemocional">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Socioemocional</h1>
            </div>
            <!-- MULTIDISCIPLINAR -->
            <div class="item__container item-multidisciplinar">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Multidisciplinar</h1>
            </div>
            <!-- MULTIDISCIPLINAR 2 -->
            <div class="item__container item-multidisciplinar">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Multidisciplinar 2</h1>
            </div>
            <!-- PARQUINHO -->
            <div class="item__container item-parquinho">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Parquinho</h1>
            </div>
            <!-- PARQUINHO 2 -->
            <div class="item__container item-parquinho">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Parquinho 2</h1>
            </div>
            <!-- PARQUINHO 3 -->
            <div class="item__container item-parquinho">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Parquinho 3</h1>
            </div>
            <!-- PARQUINHO 4 -->
            <div class="item__container item-parquinho">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Parquinho 4</h1>
            </div>
            <!-- REFEITÓRIO -->
            <div class="item__container item-refeitorio">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório</h1>
            </div>
            <!-- REFEITÓRIO 2 -->
            <div class="item__container item-refeitorio">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório 2</h1>
            </div>
            <!-- REFEITÓRIO 3 -->
            <div class="item__container item-refeitorio">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório 3</h1>
            </div>
            <!-- REFEITÓRIO 4 -->
            <div class="item__container item-refeitorio">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório 4</h1>
            </div>
        `
}

function verificarVisibilidadeEMostrarSalasDeAula(authenticatedUser) {

    const containerMulticameras = document.querySelector('.row-multicameras__item');

    //BERCARIO
    if((authenticatedUser.data().isBercario || authenticatedUser.data().isAdmin)) {
        containerBercario.classList.add('swiper-slide');
        containerBercario.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- BERÇÁRIO -->
            <div class="item__container item-bercario">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Berçário</h1>
            </div>
            <!-- BERÇÁRIO 2 -->
            <div class="item__container item-bercario">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Berçário 2</h1>
            </div>
            <!-- BERÇÁRIO 3 -->
            <div class="item__container item-bercario">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Berçário 3</h1>
            </div>
        `
    }
    //INFANTIL 1
    if((authenticatedUser.data().isInfantil1 || authenticatedUser.data().isAdmin)) {
        containerInfantil1.classList.add('swiper-slide');
        containerInfantil1.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 1 -->
        <div class="item__container item-infantil-1">
          <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
            src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
            allowfullscreen></iframe>
          <h1 class="item-titulo">Infantil 1</h1>
        </div>
        `
    }
    //INFANTIL 1B
    if((authenticatedUser.data().isInfantil1B || authenticatedUser.data().isAdmin)) {
        containerInfantil1B.classList.add('swiper-slide');
        containerInfantil1B.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 1B -->
        <div class="item__container item-infantil-1b">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 1B</h1>
            </div>
        `
    }
    //INFANTIL 2
    if((authenticatedUser.data().isInfantil2 || authenticatedUser.data().isAdmin)) {
        containerInfantil2.classList.add('swiper-slide');
        containerInfantil2.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 2 -->
            <div class="item__container item-infantil-2">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 2</h1>
            </div>
        `
    }
    //INFANTIL 2B
    if((authenticatedUser.data().isInfantil2B || authenticatedUser.data().isAdmin)) {
        containerInfantil2B.classList.add('swiper-slide');
        containerInfantil2B.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 2B -->
            <div class="item__container item-infantil-2b">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 2B</h1>
            </div>
        `
    }
    //INFANTIL 3
    if((authenticatedUser.data().isInfantil3 || authenticatedUser.data().isAdmin)) {
        containerInfantil3.classList.add('swiper-slide');
        containerInfantil3.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 3 -->
            <div class="item__container item-infantil-3">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 3</h1>
            </div>
        `
    }
    //INFANTIL 3B 
    if((authenticatedUser.data().isInfantil3B || authenticatedUser.data().isAdmin)) {
        containerInfantil3B.classList.add('swiper-slide');
        containerInfantil3B.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 3B -->
            <div class="item__container item-infantil-3b">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 3B</h1>
            </div>
        `
    }
    //INFANTIL 4
    if((authenticatedUser.data().isInfantil4 || authenticatedUser.data().isAdmin)) {
        containerInfantil4.classList.add('swiper-slide');
        containerInfantil4.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 4 -->
            <div class="item__container item-infantil-4">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 4</h1>
            </div>
        `
    }
    //INFANTIL 4B
    if((authenticatedUser.data().isInfantil4B || authenticatedUser.data().isAdmin)) {
        containerInfantil4B.classList.add('swiper-slide');
        containerInfantil4B.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 4B -->
            <div class="item__container item-infantil-4b">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 4B</h1>
            </div>
        `
    }
    //PRIMEIRO ANO
    if((authenticatedUser.data().isPrimeiroAno || authenticatedUser.data().isAdmin)) {
        containerPrimeiroAno.classList.add('swiper-slide');
        containerPrimeiroAno.classList.remove('hidden');
        
        containerMulticameras.innerHTML += `
        <!-- PRIMEIRO ANO -->
            <div class="item__container item-primeiroano">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Primeiro Ano</h1>
            </div>
        `
    }
    //PRIMEIRO ANO B
    if((authenticatedUser.data().isPrimeiroAnoB || authenticatedUser.data().isAdmin)) {
        containerPrimeiroAnoB.classList.add('swiper-slide');
        containerPrimeiroAnoB.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- PRIMEIRO ANO B -->
            <div class="item__container item-primeiroanob">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Primeiro Ano B</h1>
            </div>
        `
    }
    //SEGUNDO ANO
    if((authenticatedUser.data().isSegundoAno && authenticatedUser.data().isAdmin)) {
        containerSegundoAno.classList.add('swiper-slide');
        containerSegundoAno.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- SEGUNDO ANO -->
            <div class="item__container item-segundoano">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Segundo Ano</h1>
            </div>
        `
    }
    //SEGUNDO ANO B
    if((authenticatedUser.data().isSegundoAnoB || authenticatedUser.data().isAdmin)) {
        containerSegundoAnoB.classList.add('swiper-slide');
        containerSegundoAnoB.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- SEGUNDO ANO B -->
            <div class="item__container item-segundoanob">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Segundo Ano B</h1>
            </div>
        `
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Reforço</h1>
            </div>
            <!-- REFORÇO 2 -->
            <div class="item__container item-reforco">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Reforço 2</h1>
            </div>
        `
    }
    //MINI MATERNAL
    if(authenticatedUser.data().isMiniMaternal) {
        containerMiniMaternal.classList.add('swiper-slide');
        containerMiniMaternal.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- MINI MATERNAL -->
            <div class="item__container item-minimaternal">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Mini Maternal</h1>
            </div>
            <!-- REFEITÓRIO MINI -->
            <div class="item__container item-refeitorio">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório Mini</h1>
            </div>
        `
    }
}
