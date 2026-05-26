import CTAButton from './CTAButton';

export default function FinalCTA() {
  return (
    <section className="final-cta-section" aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="final-cta">
          <h2 className="final-cta__heading" id="final-cta-heading">
            Revisa tus opciones antes de tomar una decisión
          </h2>
          <p className="final-cta__sub">
            Sin compromiso, sin costo. Si tienes dudas, también puedes escribir
            directamente para preguntar.
          </p>
          <CTAButton className="btn btn--large">
            Comenzar validación por WhatsApp
          </CTAButton>
          <p className="privacy-note">
            Tus datos se usan únicamente para validación y análisis del trámite.
          </p>
        </div>
      </div>
    </section>
  );
}
