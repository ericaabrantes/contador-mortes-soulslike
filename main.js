$(document).ready(function(){
    contadorMortes.innerHTML = 0
})

var count = 0;

function acrescentar() {
    count++;
    contadorMortes.innerHTML = count
}