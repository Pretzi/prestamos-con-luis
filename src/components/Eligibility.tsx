export default function Eligibility() {
  return (
    <section id="para-quien" className="section section--alt" aria-labelledby="eligibility-heading">
      <div className="container">
        <div className="split split--reverse">
          <div className="split__text">
            <h2 className="section__heading" id="eligibility-heading">
              ¿Para quién es este servicio?
            </h2>
            <div className="prose">
              <p>
                El servicio está dirigido a empleados del gobierno federal en
                México que tengan relación laboral activa, o que perciban una
                pensión o jubilación reconocida institucionalmente.
              </p>
              <p>
                Las modalidades disponibles —domiciliada o vía nómina— dependen
                del convenio vigente, la institución financiera, la zona
                geográfica y la disponibilidad al momento de la solicitud.
              </p>
              <p className="compliance-note">
                La aprobación de cualquier trámite depende del perfil del
                solicitante, la validación de datos, la institución financiera,
                el convenio aplicable y las condiciones vigentes al momento de
                la solicitud. No todos los casos califican.
              </p>
            </div>
          </div>
          <div className="split__aside">
            <div className="eligibility-grid">
              <div className="eligibility-group">
                <span className="eligibility-group__label">Tipo de empleo</span>
                <ul className="eligibility-group__list">
                  <li>Personal activo</li>
                  <li>Jubilados</li>
                  <li>Pensionados</li>
                </ul>
              </div>
              <div className="eligibility-group">
                <span className="eligibility-group__label">Institución</span>
                <ul className="eligibility-group__list">
                  <li>SEP</li>
                  <li>IMSS</li>
                  <li>ISSSTE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
