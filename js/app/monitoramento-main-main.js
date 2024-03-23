
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

//WEBVIEWS SALAS DE AULA
const webViewBercario = document.querySelector('.item-bercario');
const webViewInfantil1 = document.querySelector('.item-infantil-1');
const webViewInfantil1B = document.querySelector('.item-infantil-1b');
const webViewInfantil2 = document.querySelector('.item-infantil-2');
const webViewInfantil2B = document.querySelector('.item-infantil-2b');
const webViewInfantil3 = document.querySelector('.item-infantil-3');
const webViewInfantil3B = document.querySelector('.item-infantil-3b');
const webViewInfantil4 = document.querySelector('.item-infantil-4');
const webViewInfantil4B = document.querySelector('.item-infantil-4b');
const webViewPrimeiroAno = document.querySelector('.item-primeiroano');
const webViewPrimeiroAnoB = document.querySelector('.item-primeiroanob');
const webViewSegundoAno = document.querySelector('.item-segundoano');
const webViewSegundoAnoB = document.querySelector('.item-segundoanob');
const webViewReforco = document.querySelector('.item-reforco');
const webViewMiniMaternal = document.querySelector('.item-minimaternal');

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
        if(!(authenticatedUser.data().isBercario || authenticatedUser.data().isAdmin)) {
            containerBercario.classList.remove('swiper-slide');
            containerBercario.classList.add('hidden');

            webViewBercario.classList.add('hidden');
        }
        //INFANTIL 1
        if(!(authenticatedUser.data().isInfantil1 || authenticatedUser.data().isAdmin)) {
            containerInfantil1.classList.remove('swiper-slide');
            containerInfantil1.classList.add('hidden');

            webViewInfantil1.classList.add('hidden');
        }
        //INFANTIL 1B
        if(!(authenticatedUser.data().isInfantil1B || authenticatedUser.data().isAdmin)) {
            containerInfantil1B.classList.remove('swiper-slide');
            containerInfantil1B.classList.add('hidden');

            webViewInfantil1B.classList.add('hidden');
        }
        //INFANTIL 2
        if(!(authenticatedUser.data().isInfantil2 || authenticatedUser.data().isAdmin)) {
            containerInfantil2.classList.remove('swiper-slide');
            containerInfantil2.classList.add('hidden');

            webViewInfantil2.classList.add('hidden');
        }
        //INFANTIL 2B
        if(!(authenticatedUser.data().isInfantil2B || authenticatedUser.data().isAdmin)) {
            containerInfantil2B.classList.remove('swiper-slide');
            containerInfantil2B.classList.add('hidden');

            webViewInfantil2B.classList.add('hidden');
        }
        //INFANTIL 3
        if(!(authenticatedUser.data().isInfantil3 || authenticatedUser.data().isAdmin)) {
            containerInfantil3.classList.remove('swiper-slide');
            containerInfantil3.classList.add('hidden');

            webViewInfantil3.classList.add('hidden');
        }
        //INFANTIL 3B 
        if(!(authenticatedUser.data().isInfantil3B || authenticatedUser.data().isAdmin)) {
            containerInfantil3B.classList.remove('swiper-slide');
            containerInfantil3B.classList.add('hidden');

            webViewInfantil3B.classList.add('hidden');
        }
        //INFANTIL 4
        if(!(authenticatedUser.data().isInfantil4 || authenticatedUser.data().isAdmin)) {
            containerInfantil4.classList.remove('swiper-slide');
            containerInfantil4.classList.add('hidden');

            webViewInfantil4.classList.add('hidden');
        }
        //INFANTIL 4B
        if(!(authenticatedUser.data().isInfantil4B || authenticatedUser.data().isAdmin)) {
            containerInfantil4B.classList.remove('swiper-slide');
            containerInfantil4B.classList.add('hidden');

            webViewInfantil4B.classList.add('hidden');
        }
        //PRIMEIRO ANO
        if(!(authenticatedUser.data().isPrimeiroAno || authenticatedUser.data().isAdmin)) {
            containerPrimeiroAno.classList.remove('swiper-slide');
            containerPrimeiroAno.classList.add('hidden');
            
            webViewPrimeiroAno.classList.add('hidden');
        }
        //PRIMEIRO ANO B
        if(!(authenticatedUser.data().isPrimeiroAnoB || authenticatedUser.data().isAdmin)) {
            containerPrimeiroAnoB.classList.remove('swiper-slide');
            containerPrimeiroAnoB.classList.add('hidden');

            webViewPrimeiroAnoB.classList.add('hidden');
        }
        //SEGUNDO ANO
        if(!(authenticatedUser.data().isSegundoAno && authenticatedUser.data().isAdmin)) {
            containerSegundoAno.classList.remove('swiper-slide');
            containerSegundoAno.classList.add('hidden');

            webViewSegundoAno.classList.add('hidden');
        }
        //SEGUNDO ANO B
        if(!(authenticatedUser.data().isSegundoAnoB || authenticatedUser.data().isAdmin)) {
            containerSegundoAnoB.classList.remove('swiper-slide');
            containerSegundoAnoB.classList.add('hidden');

            webViewSegundoAnoB.classList.add('hidden');
        }
        //REFORCO
        if(!(authenticatedUser.data().isPrimeiroAno || authenticatedUser.data().isPrimeiroAnoB 
        || authenticatedUser.data().isSegundoAno || authenticatedUser.data().isSegundoAnoB 
        || authenticatedUser.data().isReforco) || authenticatedUser.data().isAdmin) {
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
        window.location.href = '../../pages/auth/login.html';
    }

    console.log(user);
  } else {
    console.log('não há usuário autenticado');
    alert('esta página não pode ser acessada');
    window.location.href = '../../auth/login.html';
  }
});

//AÇÕES DOS CONTAINERS

//ÁREAS DA ESCOLA
//--> MINDMAKERS
containerMindMakers.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})

//--> SOCIOEMOCIONAL
containerSocioemocional.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})

//--> MULTIDISCIPLINAR
containerMultidisciplinar.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})

//--> PARQUINHO
containerParquinho.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
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
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> INFANTIL 1
containerInfantil1.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> INFANTIL 1B
containerInfantil1B.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> INFANTIL 2
containerInfantil2.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> INFANTIL 2B
containerInfantil2B.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> INFANTIL 3
containerInfantil3.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> INFANTIL 3B
containerInfantil3B.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> INFANTIL 4
containerInfantil4.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> INFANTIL 4B
containerInfantil4B.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> PRIMEIRO ANO
containerPrimeiroAno.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> PRIMEIRO ANO B
containerPrimeiroAnoB.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> SEGUNDO ANO
containerSegundoAno.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> SEGUNDO ANO B
containerSegundoAnoB.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> REFORÇO
containerReforco.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
})
//--> MINI MATERNAL
containerMiniMaternal.addEventListener('click', () => {
    window.location.href = '../../monitoramento/cohafuma/refeitorio-cohafuma.html';
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
