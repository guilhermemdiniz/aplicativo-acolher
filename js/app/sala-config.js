
async function buscaSala(busca) {
    const conexao = await fetch(`http://localhost:3000/salas?id=${busca}`);
    const sala = await conexao.json();

    return sala;
}

async function constroiTela() {
    const tela = document.querySelector('body');

    const busca = document.getElementById('idPagina').textContent;
    const customContainer = document.querySelector('.monitoramento__container');
    const sala = await buscaSala(busca);

    sala.forEach(elemento => {
        tela.style.backgroundColor = `${elemento.cor}`;
        customContainer.innerHTML = `
        <!-- ADIÇÃO DA LOTTIE ANIMATION -->
        <lottie-player id="animacao" src="${elemento.animacao}" background="transparent" speed="1" loop autoplay></lottie-player>
        <!-- TITULO -->
        <h1 class="monitoramento__titulo">${elemento.nome}</h1>
        <!-- DATA E HORA -->
        <p class="monitoramento__data-hora">14/03/2024 10:01 AM</p>
        <!-- VIDEO DO MONITORAMENTO AO VIVO -->
        <iframe style="width: 90vw; height: 215px; margin: 40px 0 0 0; border-radius: 14px;" src="https://acolherservices.iconnecti.com.br/CAMERAS%20COHAFUMA/refeitorio.html" frameborder="0" allowfullscreen></iframe>
      `
    })
}

constroiTela();
