import lago from '../assets/gallery/lago.jpg';
import bosque from '../assets/gallery/bosque.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about__container">
        <div className="about__images">
          <img src={lago} alt="Shampoo HoneyB en un lago natural" className="about__img about__img--main" />
          <img src={bosque} alt="Shampoo HoneyB en el bosque" className="about__img about__img--secondary" />
        </div>

        <div className="about__content">
          <span className="section-tag">Nuestra Historia</span>
          <h2 className="about__title">Del proposito nace la empresa, de Dios el camino</h2>
          <p className="about__text">
            Honey'B nacio hace 3 anos con una mision clara: ofrecer cuidado capilar real con ingredientes
            naturales, sin danar el planeta. Somos una marca colombiana que cree en la cosmetica consciente.
          </p>
          <p className="about__text">
            Cada barra de shampoo solido es elaborada artesanalmente con miel pura de abejas, curcuma organica,
            romero fresco y extractos vegetales cuidadosamente seleccionados. Sin sulfatos, sin parabenos,
            sin siliconas, sin plastico.
          </p>

          <div className="about__values">
            <div className="about__value">
              <div className="about__value-hex" />
              <div>
                <strong>Sostenibilidad</strong>
                <span>Empaque 100% biodegradable</span>
              </div>
            </div>
            <div className="about__value">
              <div className="about__value-hex" />
              <div>
                <strong>Calidad Artesanal</strong>
                <span>Produccion a mano en Colombia</span>
              </div>
            </div>
            <div className="about__value">
              <div className="about__value-hex" />
              <div>
                <strong>Ingredientes Reales</strong>
                <span>Miel, curcuma y romero puros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
