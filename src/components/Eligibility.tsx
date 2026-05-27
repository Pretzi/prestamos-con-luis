export default function Eligibility() {
  return (
    <section id="para-quien" className="section section--alt" aria-labelledby="eligibility-heading">
      <div className="container">
        <div className="split split--reverse">
          <div className="split__text">
            <h2 className="section__heading" id="eligibility-heading">
              ¿Quién puede obtener un financiamiento?
            </h2>
            <div className="prose">
              <p>
                Las principales opciones están dirigidas a personal activo,
                jubilados y pensionados de la SEP, IMSS e ISSSTE.
              </p>
              <p>
                Los financiamientos pueden ser domiciliados o vía nómina,
                dependiendo del convenio, la zona y disponibilidad. Lo
                importante es revisar tu caso y ayudarte a encontrar la opción
                que mejor se adapte a tus necesidades.
              </p>
              <p>
                Si eres candidato a un financiamiento domiciliado, puedes
                obtenerlo desde cualquier parte del país, siempre que tu nómina
                esté en alguno de los bancos participantes. En el caso de los
                trámites vía nómina, dependen del estado, la zona y el convenio
                disponible con la institución.
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
