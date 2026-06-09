import lago from '../assets/gallery/lago.jpg';
import fundador from '../assets/proceso/fundador.jpeg';
import './About.css';

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about__container">
        <div className="about__images">
          <img src={lago} alt="Shampoo HoneyB en un lago natural" className="about__img about__img--main" />
          <img src={fundador} alt="Santiago Cavanzo, fundador de HoneyB" className="about__img about__img--secondary" />
        </div>

        <div className="about__content">
          <span className="section-tag">Nuestra Historia</span>
          <h2 className="about__title">HONEY'B, una marca que ha evolucionado con proposito</h2>
          <p className="about__mini">Desde 2022.</p>
          <p className="about__text">
            HONEY'B nacio en 2022 como un emprendimiento con una idea clara: crear un shampoo solido premium
            que cuidara el cabello y redujera residuos. Desde entonces hemos evolucionado: mejoramos la formula,
            optimizamos procesos y elevamos la experiencia, manteniendo nuestro compromiso con el agua y con
            una cadena productiva responsable.
          </p>

          <div className="about__founder">
            <h4>Sobre el fundador</h4>
            <p>
              Santiago Cavanzo (2001) es emprendedor y consultor estrategico, Cum Laude en Administracion de Empresas
              y con MBA en curso. Ha liderado proyectos de sostenibilidad e innovacion social y fue delegado en el
              14.o Foro de Juventudes de la UNESCO. Hoy dirige HoneyB con una meta clara: llevar un producto
              colombiano premium a mercados internacionales.
            </p>
          </div>

          <div className="about__values">
            <div className="about__value">
              <div className="about__value-hex" />
              <div>
                <strong>Trayectoria real</strong>
                <span>Evolucion constante desde 2022</span>
              </div>
            </div>
            <div className="about__value">
              <div className="about__value-hex" />
              <div>
                <strong>Calidad en evolucion</strong>
                <span>Formula optimizada y proceso controlado</span>
              </div>
            </div>
            <div className="about__value">
              <div className="about__value-hex" />
              <div>
                <strong>Impacto con intencion</strong>
                <span>Cadena productiva responsable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
