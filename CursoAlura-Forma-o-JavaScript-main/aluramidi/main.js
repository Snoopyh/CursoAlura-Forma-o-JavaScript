function TocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
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
