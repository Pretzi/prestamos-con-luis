export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__close">
            <p className="footer__signoff">
              Atentamente,<br />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/signature-white.png" alt="Firma de Luis Álvarez" className="footer__signature" />
              <em>Luis Álvarez</em>
            </p>
            <p className="footer__ps">
              P.D. Si tienes preguntas antes de enviar tus datos, con gusto las
              respondo directamente por WhatsApp.
            </p>
          </div>
          <div className="footer__meta">
            <p className="footer__brand">
              Los Préstamos con Luis ·{' '}
              <a
                href="https://wa.me/5212294172112"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
            <p className="footer__compliance">
              Este servicio es de asesoría y gestión de financiamiento. La
              aprobación de cualquier crédito depende del perfil del solicitante,
              la validación de datos, la institución financiera, el convenio
              aplicable, la zona geográfica y las condiciones vigentes al momento
              de la solicitud. No se garantiza la aprobación.
            </p>
            <p className="footer__privacy">
              Aviso de privacidad: Los datos personales proporcionados se utilizan
              exclusivamente para el análisis y gestión del trámite de
              financiamiento, conforme a la Ley Federal de Protección de Datos
              Personales en Posesión de los Particulares (LFPDPPP).
            </p>
            <p className="footer__copy">© 2025 Luis Álvarez · Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
