
import { login, auth } from "../firebase/firebase-auth.js";
import { app } from "../app/app.js";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, getAuth, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const db = getFirestore(app);

const botaoBack = document.querySelector('.arrow-left svg');

const formularioCadastro = document.querySelector('.cadastro__formulario');

const inputEmail = document.querySelector('.formulario__email');
const inputSenha = document.querySelector('.formulario__senha');
const inputSenhaConfirmacao = document.querySelector('.formulario__senha-confirmacao');
const inputNome = document.querySelector('.formulario__nome-responsavel');
const inputAluno = document.querySelector('.formulario__nome-aluno');

const cohafumaCheck = document.getElementById('cohafuma');
const cohatracCheck = document.getElementById('cohatrac');
const turuCheck = document.getElementById('turu');
const adminCheck = document.getElementById('admin');
const bercarioCheck = document.getElementById('bercario');
const minimaternalCheck = document.getElementById('minimaternal');
const infantil1Check = document.getElementById('infantil1');
const infantil1bCheck = document.getElementById('infantil1b');
const infantil2Check = document.getElementById('infantil2');
const infantil2bCheck = document.getElementById('infantil2b');
const infantil3Check = document.getElementById('infantil3');
const infantil3bCheck = document.getElementById('infantil3b');
const infantil4Check = document.getElementById('infantil4');
const infantil4bCheck = document.getElementById('infantil4b');
const primeiroanoCheck = document.getElementById('primeiroano');
const primeiroanobCheck = document.getElementById('primeiroanob');
const segundoanoCheck = document.getElementById('segundoano');
const segundoanobCheck = document.getElementById('segundoanob');
const reforcoCheck = document.getElementById('reforco');
const contapessoalCheck = document.getElementById('contapessoal');

botaoBack.addEventListener('click', () => {
    window.location.href = '../../pages/perfil.html';
})

inputEmail.addEventListener('input', emailValidacao);

inputSenha.addEventListener('input', () => {
    senhaValidacao();
    senhaConfirmValidacao();
});

inputSenhaConfirmacao.addEventListener('input', () => {
    senhaConfirmValidacao();
    senhaValidacao();
});

formularioCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();
    try {
        if (!senhaConfirmValidacao() || !emailValidacao()){
            throw 'Alguns campos não foram preenchidos corretamente';
        }
        console.log('senha confirmada');
        const formData = {
            nomeResponsavel: inputNome.value,
            nomeAluno: inputAluno.value,
            email: inputEmail.value,
            passworld: inputSenha.value,

            isCohafuma: cohafumaCheck.checked,
            isCohatrac: cohatracCheck.checked,
            isTuru: turuCheck.checked,

            isAdmin: adminCheck.checked,
            isBercario: bercarioCheck.checked,
            isMiniMaternal: minimaternalCheck.checked,
            isInfantil1: infantil1Check.checked,
            isInfantil1b: infantil1bCheck.checked,
            isInfantil2: infantil2Check.checked,
            isInfantil2b: infantil2bCheck.checked,
            isInfantil3: infantil3Check.checked,
            isInfantil3b: infantil3bCheck.checked,
            isInfantil4: infantil4Check.checked,
            isInfantil4b: infantil4bCheck.checked,
            isPrimeiroAno: primeiroanoCheck.checked,
            isPrimeiroAnob: primeiroanobCheck.checked,
            isSegundoAno: segundoanoCheck.checked,
            isSegundoAnob: segundoanobCheck.checked,
            isReforco: reforcoCheck.checked,
            isContaPessoal: contapessoalCheck.checked
        }

        createUserWithEmailAndPassword(auth, formData.email, formData.passworld)
        .then(async data => {
            let createdTime = new Date();

            let unidades = '';

            if(formData.isCohafuma) {
                unidades += 'Cohafuma';
            }
            if(formData.isCohatrac) {
                unidades += ' Cohatrac';
            }
            if(formData.isTuru) {
                unidades += ' Turu';
            }

            await updateProfile(data.user, {
                photoURL: "https://firebasestorage.googleapis.com/v0/b/aplicativo-acolher-13614.appspot.com/o/app%2Fassets%2Fapp%20(1).jpg?alt=media&token=1a239a8c-cad5-41da-bc19-29f1ed14d285",
                displayName: formData.nomeResponsavel,
                email: formData.email
            })
            .then(
                console.log('usuário atualizado com sucesso em Firebase Authentication')
            )
            .catch((error) => {
                console.log(error.message)
            })

            await setDoc(doc(db, "users", data.user.uid), {
                created_time: createdTime,
                display_name: formData.nomeResponsavel,
                email: formData.email,
                filhos: formData.nomeAluno,

                isAdmin: formData.isAdmin,
                isBercario: formData.isBercario,
                isContaPessoal: formData.isContaPessoal,
                isInfantil1: formData.isInfantil1,
                isInfantil1B: formData.isInfantil1b,
                isInfantil2: formData.isInfantil2,
                isInfantil2B: formData.isInfantil2b,
                isInfantil3: formData.isInfantil3,
                isInfantil3B: formData.isInfantil3b,
                isInfantil4: formData.isInfantil4,
                isInfantil4B: formData.isInfantil4b,
                isMiniMaternal: formData.isMiniMaternal,
                isPaiCohafuma: formData.isCohafuma,
                isPaiCohatrac: formData.isCohatrac,
                isPaiTuru: formData.isTuru,
                isPrimeiroAno: formData.isPrimeiroAno,
                isPrimeiroAnoB: formData.isPrimeiroAnob,
                isReforco: formData.isReforco,
                isSegundoAno: formData.isSegundoAno,
                isSegundoAnoB: formData.isSegundoAnob,
                photo_url: data.user.photoURL,
                redefiniuSenha: false,
                uid: data.user.uid,
                unidades: unidades,
            })
            .then(
                console.log('usuário criado com sucesso'),
                console.log(data.user)
            );
        })
        .catch(error => {
            if(error === 'auth/email-already-in-use') {
                alert('esse email já está em uso');
            }
            else {
                alert(error.message);
            }
            console.log(error);
        });
    }
    catch(erro) {
        alert(erro);
        console.log(erro);
    }
})

function greenAlert(text, inputFeedback){
    inputFeedback.textContent = text;
    inputFeedback.classList.remove('hidden');
    inputFeedback.style.color = '#15ce25';
}

function redAlert(text, inputFeedback){
    inputFeedback.textContent = text;
    inputFeedback.classList.remove('hidden');
    inputFeedback.style.color = '#f12323';
}

function senhaValidacao() {
    let senha = inputSenha.value;
    if(!(senha.includes(' '))) {
        if(!(senha.length < 7)) {
            greenAlert('Senha válida', document.querySelector('.input-feedback'));
            return true;
        }
        else {
            redAlert('A senha deve conter pelo menos 7 caracteres', document.querySelector('.input-feedback'))
            return false;
        }
    }
    redAlert('A senha não deve conter espaços em branco', document.querySelector('.input-feedback'));
    return false;
}

function senhaConfirmValidacao() {
    if(senhaValidacao()) {
        if(inputSenha.value == inputSenhaConfirmacao.value) {
            greenAlert('As senhas coincidem', document.querySelector('.input-confirm-feedback'));
            return true;
        }
        else {
            redAlert('As senhas não coincidem', document.querySelector('.input-confirm-feedback'));
            return false;
        }
    }
    redAlert('Digite uma senha válida no campo acima', document.querySelector('.input-confirm-feedback'));
    return false;
}

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if(emailRegex.test(email)) {
        return true;
    }
    return false;
}

function emailValidacao() {
    let email = inputEmail.value;
    if(!email.includes(' ')){
        if(isEmailValid(email)){
            greenAlert('Email válido', document.querySelector('.input-email-feedback'));
            console.log('email válido');
            return true;
        }
        else {
            redAlert('Digite um email válido', document.querySelector('.input-email-feedback'));
            console.log('digite um email válido');
            return false;
        }
    }
    else {
        redAlert('O email não deve conter espaços em branco', document.querySelector('.input-email-feedback'));
        console.log('o email não deve conter espaços em branco');
        return false;
    }
}

function testeCheckbox() {
    let listaChecks = document.querySelectorAll('.condicionais-check__item');
    listaChecks.forEach((check) => {
        const valor = check.lastElementChild.checked;
        console.log(valor);
    })
}
