function TocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);

  elemento && elemento.localName === 'audio' ? elemento.play() : alert('elemento nao encontrado');
}

const ListaDeTeclas = document.querySelectorAll(".tecla");
let contador = 0;

for (contador =0 ;contador < ListaDeTeclas.length ;contador++) {
  const tecla = ListaDeTeclas[contador]
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; // template string
  tecla.onclick = function () {
    TocaSom(idAudio);
  };
  
  tecla.onkeydown = function(event){
    if(event.code === 'Enter' || event.code === 'Space' ){
      tecla.classList.add('ativa');
    }
  };
  tecla.onkeyup = function(){tecla.classList.remove('ativa')};
}
