let incrementar = document.querySelector('.Incrementar'),
decrementar = document.querySelector('.Decrementar'),
reiniciar = document.querySelector('.Reiniciar'),
numero = document.querySelector('.numero');



incrementar.addEventListener('click', () =>{
    let contenido = parseInt(numero.innerText);
    contenido += 1;
    numero.innerText = contenido;

    if(contenido >= 0) {
        numero.style.color = 'blue';
    }
})

decrementar.addEventListener('click', () =>{
    let contenido = parseInt(numero.innerText);
    contenido -= 1;

    if(contenido < 0) {
        numero.style.color = 'red';
    }

    numero.innerText = contenido;
})

reiniciar.addEventListener('click', () =>{
    numero.innerText = '0';
    numero.style.color = 'blue';
})