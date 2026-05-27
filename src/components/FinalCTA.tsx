import CTAButton from './CTAButton';

export default function FinalCTA() {
  return (
    <section className="final-cta-section" aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="final-cta">
          <h2 className="final-cta__heading" id="final-cta-heading">
            ¿Listo para comenzar?
          </h2>
          <p className="final-cta__sub">
            Si llegaste hasta aquí, ya sabes algo que pocas personas explican:
            un financiamiento no solo se trata de dinero, se trata de entender
            cómo funciona. Ahora deja que te acompañe y revisemos juntos tus
            opciones.
          </p>
          <CTAButton className="btn btn--large">
            Comienza tu validación hoy
          </CTAButton>
          <p className="privacy-note">
            Tus datos se usan únicamente para validación y análisis del trámite.
          </p>
        </div>
      </div>
    </section>
  );
}
