const verificar = document.getElementById('verificar');
const form = document.getElementById('inputIdade');


const data = new Date()

function idade() {
    const ano = data.getFullYear()
    if (form.value > ano ||form.value == '' ) {
         alert('Ano invalido');
        form.value= '';
    } else if (form.value < 0 ) {
        alert('Ano valido');
        form.value= '';
     } else {
        const resultado =  ano - form.value
        let divResult = document.getElementById('resultado')
        divResult.innerHTML = `Sua idade é ${resultado} anos, seu randola do caralho`;
        form.value= '';
    }
}

