import React from 'react'


const Carousel = () => {

  return (
    <div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/img1.jpg" className="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
        <h1>9Z HACE PRESENTE EN RIO</h1>
        <p>Luego de una asombrosa presentacion de la escuadra argentina, 9z clasifico al major en Brasil</p>
      </div>
          </div>
          <div className="carousel-item">
            <img src="./images/img2.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
        <h1>NICOLAS "BUDA" KRAMER</h1>
        <p>Luego de una asombrosa presentacion de la escuadra argentina, 9z clasifico al major en Brasil</p>
      </div>
          </div>
          <div className="carousel-item">
            <img src="./images/img3.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
        <h1>LUCAS "NQZ" SOARES</h1>
        <p>Luego de una asombrosa presentacion de la escuadra argentina, 9z clasifico al major en Brasil</p>
      </div>
          </div>
          <div className="carousel-item">
            <img src="./images/img4.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
        <h1>DAVID TAPIA MALDONADO</h1>
        <p>Luego de una asombrosa presentacion de la escuadra argentina, 9z clasifico al major en Brasil</p>
      </div>
          </div>
          <div className="carousel-item">
            <img src="./images/img5.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
        <h1>FRANCO "DGT" GARCIA</h1>
        <p>Luego de una asombrosa presentacion de la escuadra argentina, 9z clasifico al major en Brasil</p>
      </div>
          </div>
          <div className="carousel-item">
            <img src="./images/img6.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
        <h1>MAXIMILIANO "MAX" GONZALEZ</h1>
        <p>Luego de una asombrosa presentacion de la escuadra argentina, 9z clasifico al major en Brasil</p>
      </div>
          </div>
          <div className="carousel-item">
            <img src="./images/img7.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
        <h1>ZAKK ESTA FELIZ</h1>
        <p>Luego de una asombrosa presentacion de la escuadra argentina, 9z clasifico al major en Brasil</p>
      </div>
          </div>
          <div className="carousel-item">
            <img src="./images/img8.jpg" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
        <h1>LATAM UNIDA HACIENDO HISTORIA</h1>
        <p>Luego de una asombrosa presentacion de la escuadra argentina, 9z clasifico al major en Brasil</p>
      </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
          </div>
  )
} 

export default Carousel