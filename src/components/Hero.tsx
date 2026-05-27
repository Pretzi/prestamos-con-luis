import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__tagline">¡Hola!, soy Luis Álvarez</p>
            <h1 className="hero__heading">
              Financiamiento para empleados de gobierno, explicado con claridad
            </h1>
            <p className="hero__subhead">
              Me dedico a la asesoría financiera y colocación de créditos para
              empleados de gobierno a nivel nacional.
            </p>
            <CTAButton className="btn">
              Revisar mi caso por WhatsApp
            </CTAButton>
            <ul className="trust-points" aria-label="Características del servicio">
              <li>Trámite 100% en línea</li>
              <li>Sin anticipos ni honorarios</li>
              <li>Para SEP, IMSS e ISSSTE</li>
              <li>Acompañamiento antes, durante y después</li>
            </ul>
          </div>
          <div className="hero__photo" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/luis.png"
              alt="Luis Álvarez, asesor de crédito"
              className="hero__portrait"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
