const carouselExample = document.querySelector("#carouselExampleCaptions");
const carouselDesktop = document.querySelector("#carouselExampleDesktop");

carouselExample.innerHTML = `<div> <ol class="carousel-indicators">
<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
</ol>
<div class="carousel-inner">
<div class="carousel-item active">
  <img  src="/img/takim2.jpg" class="d-block w-100" alt="...">
  <div class="carousel-caption" style="height: 35%;">
    <h2>İmtan Kaporta</h2>
    <p>Boyasız Göçük Onarım Merkezi</p>
    <br>
  </div>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
   
</div>
<div class="carousel-item">
  <img src="/img/takim3.jpg" class="d-block w-100" alt="...">
  <div class="carousel-caption " style="height: 35%;">
    <h2>Kalitenin Adresi</h2>
    <p>Kaza olmamış gibi...</p>
    <br>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a></div>`;

carouselDesktop.innerHTML = `<div style="padding : 0 5rem"> <ol class="carousel-indicators">
<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
</ol>
<div class="carousel-inner">
<div class="carousel-item active">
  <img  src="/img/takim1.jpg" class="d-block w-100" alt="...">
  <div class="carousel-caption" style="height: 35%;">
    <h2>İmtan Kaporta</h2>
    <p>Boyasız Göçük Onarım Merkezi</p>
    <br>
  </div>
   
</div>

  </div>`;
