//COHAFUMA
export function mostrarAreasDaEscolaNoMulticamerasCohafuma() {
    const containerMulticameras = document.querySelector('.row-multicameras__item');
        containerMulticameras.innerHTML += `
        <!-- SOCIOEMOCIONAL -->
            <div class="item__container item-socioemocional">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/pleno.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Socioemocional</h1>
            </div>
            <!-- MULTIDISCIPLINAR -->
            <div class="item__container item-multidisciplinar">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/multidisciplinar.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Multidisciplinar</h1>
            </div>
            <!-- MULTIDISCIPLINAR 2 -->
            <div class="item__container item-multidisciplinar">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/multidisciplinar2.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Multidisciplinar 2</h1>
            </div>
            <!-- PARQUINHO -->
            <div class="item__container item-parquinho">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/parquinho.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Parquinho</h1>
            </div>
            <!-- PARQUINHO 2 -->
            <div class="item__container item-parquinho">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/parquinho2.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Parquinho 2</h1>
            </div>
            <!-- PARQUINHO 3 -->
            <div class="item__container item-parquinho">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/parquinho3.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Parquinho 3</h1>
            </div>
            <!-- PARQUINHO 4 -->
            <div class="item__container item-parquinho">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/parquinho4.html" frameborder="0"
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio2.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório 2</h1>
            </div>
            <!-- REFEITÓRIO 3 -->
            <div class="item__container item-refeitorio">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio3.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório 3</h1>
            </div>
            <!-- REFEITÓRIO 4 -->
            <div class="item__container item-refeitorio">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio4.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório 4</h1>
            </div>
        `;
}

export function verificarVisibilidadeEMostrarSalasDeAulaCohafuma(authenticatedUser) {

    const containerMulticameras = document.querySelector('.row-multicameras__item');

    //BERCARIO
    if((authenticatedUser.data().isBercario || authenticatedUser.data().isAdmin)) {
        containerBercario.classList.add('swiper-slide');
        containerBercario.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- BERÇÁRIO -->
            <div class="item__container item-bercario">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/bercario.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Berçário</h1>
            </div>
            <!-- BERÇÁRIO 2 -->
            <div class="item__container item-bercario">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/bercario2.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Berçário 2</h1>
            </div>
            <!-- BERÇÁRIO 3 -->
            <div class="item__container item-bercario">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/bercario3.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Berçário 3</h1>
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
            src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/infantil1a.html" frameborder="0"
            allowfullscreen></iframe>
          <h1 class="item-titulo">Infantil 1</h1>
        </div>
        `;
    }
    //INFANTIL 1B
    if((authenticatedUser.data().isInfantil1B || authenticatedUser.data().isAdmin)) {
        containerInfantil1B.classList.add('swiper-slide');
        containerInfantil1B.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 1B -->
        <div class="item__container item-infantil-1b">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/infantil1b.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 1B</h1>
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/infantil2a.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 2</h1>
            </div>
        `;
    }
    //INFANTIL 2B
    if((authenticatedUser.data().isInfantil2B || authenticatedUser.data().isAdmin)) {
        containerInfantil2B.classList.add('swiper-slide');
        containerInfantil2B.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 2B -->
            <div class="item__container item-infantil-2b">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/infantil2b.html" frameborder="0"
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/infantil3a.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 3</h1>
            </div>
        `;
    }
    //INFANTIL 3B 
    if((authenticatedUser.data().isInfantil3B || authenticatedUser.data().isAdmin)) {
        containerInfantil3B.classList.add('swiper-slide');
        containerInfantil3B.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 3B -->
            <div class="item__container item-infantil-3b">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/infantil3b.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 3B</h1>
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/infantil4a.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 4</h1>
            </div>
        `;
    }
    //INFANTIL 4B
    if((authenticatedUser.data().isInfantil4B || authenticatedUser.data().isAdmin)) {
        containerInfantil4B.classList.add('swiper-slide');
        containerInfantil4B.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- INFANTIL 4B -->
            <div class="item__container item-infantil-4b">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/infantil4b.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Infantil 4B</h1>
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/1ano.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Primeiro Ano</h1>
            </div>
        `;
    }
    //PRIMEIRO ANO B
    if((authenticatedUser.data().isPrimeiroAnoB || authenticatedUser.data().isAdmin)) {
        containerPrimeiroAnoB.classList.add('swiper-slide');
        containerPrimeiroAnoB.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- PRIMEIRO ANO B -->
            <div class="item__container item-primeiroanob">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/1ano.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Primeiro Ano B</h1>
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/2ano.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Segundo Ano</h1>
            </div>
        `;
    }
    //SEGUNDO ANO B
    if((authenticatedUser.data().isSegundoAnoB || authenticatedUser.data().isAdmin)) {
        containerSegundoAnoB.classList.add('swiper-slide');
        containerSegundoAnoB.classList.remove('hidden');

        containerMulticameras.innerHTML += `
        <!-- SEGUNDO ANO B -->
            <div class="item__container item-segundoanob">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/2ano.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Segundo Ano B</h1>
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refor%C3%A7o.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Reforço</h1>
            </div>
            <!-- REFORÇO 2 -->
            <div class="item__container item-reforco">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/Reforço:
https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refor%C3%A7o2.htmlo.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Reforço 2</h1>
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
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/minimaternala.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Mini Maternal</h1>
            </div>
            <!-- REFEITÓRIO MINI
            <div class="item__container item-refeitorio">
              <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;"
                src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0"
                allowfullscreen></iframe>
              <h1 class="item-titulo">Refeitório Mini</h1>
            </div> -->
        `;
    }
}

//COHATRAC
export function mostrarAreasDaEscolaNoMulticamerasCohatrac() {
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
        `;
}

