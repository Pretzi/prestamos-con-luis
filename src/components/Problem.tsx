export default function Problem() {
  return (
    <section className="section" aria-labelledby="problem-heading">
      <div className="container">
        <div className="split">
          <div className="split__text">
            <h2 className="section__heading" id="problem-heading">
              La pregunta que más importa no es cuánto te prestan
            </h2>
            <div className="prose">
              <p>
                Muchas personas que buscan financiamiento ya saben que necesitan
                un crédito, pero no saben con certeza si podrán pagarlo
                cómodamente, si las condiciones son convenientes para su
                situación, o si alguien les explicará con honestidad lo que
                están firmando.
              </p>
              <p>
                La preocupación real no siempre es el monto. A veces es el miedo
                a comprometerse sin entender bien el contrato, o haber tenido una
                mala experiencia antes con tasas que no eran las prometidas, o
                abonos que no reducían la deuda como se esperaba.
              </p>
              <blockquote className="pull-quote">
                <p>
                  Un crédito no solo se trata de cuánto te prestan, sino de
                  entender cómo lo vas a pagar y si realmente te conviene.
                </p>
              </blockquote>
              <p>
                Este servicio no busca convencerte de tomar un crédito. Busca
                que, si decides tomarlo, lo hagas con información completa y
                sin sorpresas.
              </p>
            </div>
          </div>
          <aside className="split__aside" aria-label="Preocupaciones frecuentes">
            <h3 className="concerns__heading">Lo que más preocupa antes de decidir</h3>
            <ul className="concerns__list">
              <li>¿Cuánto me va a descontar cada quincena?</li>
              <li>¿Me explicarán el contrato antes de firmar?</li>
              <li>¿Hay cargos que no aparecen desde el inicio?</li>
              <li>¿Puedo liquidar el crédito antes de tiempo?</li>
              <li>¿Qué pasa si tengo problemas para pagar?</li>
              <li>¿Qué revisan de mi historial crediticio?</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
