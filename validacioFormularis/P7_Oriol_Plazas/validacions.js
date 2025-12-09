//Variables per a cada item
const nom = document.getElementById('nom');
const cognom = document.getElementById('cognom');
const dataNaixement = document.getElementById('data_naixement');
const correu = document.getElementById('correu');
const telefon = document.getElementById('telefon');
const adreca = document.getElementById('adreca');
const button = document.getElementById('submitBtn');
const form = document.getElementById('form');

form.addEventListener('submit', function (event) {

    //Es guarden com a variable els valors dels inputs
    let nomV = nom.value;
    let cognomV = cognom.value;
    let adrecaV = adreca.value;
    let dataV = dataNaixement.value;
    let correuV = correu.value;
    let telefonV = telefon.value;

    //Es comprova que no hi hagin camps buits al formulari
    if (nomV.trim() == "" || cognomV.trim() == "" || dataV.trim() == "" || telefonV.trim() == "" || adrecaV.trim() == "") {
        console.log("NO ENVIIS BUITS");
        event.preventDefault();
    }


    //Es crida a la funcio validarData i s'apliquen estils
    if (!validarData(dataV)) {
        document.getElementById('data_error').classList.remove('hidden');
        dataNaixement.classList.remove('border-green-500');
        dataNaixement.classList.add('border-red-500');
        document.getElementById('data_error').classList.add('block');
        console.log('Eres menor');
        event.preventDefault();
    } else {
        document.getElementById('data_error').classList.remove('block');
        document.getElementById('data_error').classList.add('hidden');
        dataNaixement.classList.remove('border-red-500');
        dataNaixement.classList.add('border-green-500');
    }

    //Es crida a la funcio validarEmail i s'apliquen estils
    if (!validarEmail(correuV)) {
        console.log("Email NO VALID");
        event.preventDefault();
        document.getElementById('correu_error').classList.remove('hidden');
        document.getElementById('correu_error').classList.add('block');
        correu.classList.remove('border-green-500');
        correu.classList.add('border-red-500');
    } else {
        console.log("Email Valid");
        document.getElementById('correu_error').classList.remove('block');
        document.getElementById('correu_error').classList.add('hidden');
        correu.classList.remove('border-red-500');
        correu.classList.add('border-green-500');
    }
 
    
    //Es crida a la funcio validarTelefon i s'apliquen estils
    if (!validarTelefon(telefonV)) {
        event.preventDefault();
        console.log('TELEFON NO VALID');
        document.getElementById('telefon_error').classList.remove('hidden');
        document.getElementById('telefon_error').classList.add('block');
        telefon.classList.remove('border-green-500');
        telefon.classList.add('border-red-500');
    } else {
        console.log('Telefon valid');
        document.getElementById('telefon_error').classList.remove('block');
        document.getElementById('telefon_error').classList.add('hidden');
        telefon.classList.remove('border-red-500');
        telefon.classList.add('border-green-500');
    }

    //Comprovar que tot es correcta i mostrar un alert
    if(validarData && validarEmail && validarTelefon) {
        alert('Formulari enviar correctament');
    }

});

/* === FUNCIONS PER A VALIDAR DIFERENTS CAMPS DE FORMULARIS QUE RETORNEN UN BOOLEAN (true/false) === */ 

//Funcio per a validar un telefon segons una regular expresion (regex)
function validarTelefon(telefon) {
    const telRegex = /^\d{9}$/;
    if (telRegex.test(telefon)) {
        return true;
    } else {
        return false;
    }
}
//Funcio per a validar un correu segons una regular expresion (regex)
function validarEmail(correu) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(correu)) {
        return true;
    } else {
        return false;
    }

}
//Funcio per a validar la data agafant l'any actual i restant
function validarData(data) {
    let avui = new Date();
    let dataNaix = new Date(data);
    let edat = avui.getFullYear() - dataNaix.getFullYear();

    if (edat < 18) {
        return false;
    } else {
        return true;
    }

}