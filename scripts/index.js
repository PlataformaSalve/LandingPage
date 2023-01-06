var responsiveSlider = function() {

    var slider = document.getElementById("slider"); // Pega o elemento com ID "SLIDER"
    var sliderWidth = slider.offsetWidth; //Retorna a leitura da largura do elemento (slider)
    var slideList = document.getElementById("slideWrap"); // Pega o elemento com ID "SLIDEWRAP"
    var count = 1; 
    var items = slideList.querySelectorAll("li").length; // Pega a quantidade de elementos na lista
    var prev = document.getElementById("prev"); // Botao de voltar
    var next = document.getElementById("next"); // Botao de avançar
    
    window.addEventListener('resize', function() { // Event Listener: ele define o width do elemento com o valor retornado anteriormente (Linha 4)
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() { // function para voltar os slides
      if(count > 1) { // se count for maior que 1, ele volta para a iamgem anterior
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) { // se ele for igual a 1, ele vai para a ultima imagem
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) { // Se ele for menor que a quantidade de itens maxima, ele passa o slide pra frente
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) { // Se ele for igual a quantidade de itens maximo, ele vai para o 1 slide
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 5000);
    
};
    
window.onload = function() {
responsiveSlider();  
}