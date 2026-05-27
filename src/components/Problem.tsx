export default function Problem() {
  return (
    <section className="section" aria-labelledby="problem-heading">
      <div className="container">
        <div className="split">
          <div className="split__text">
            <h2 className="section__heading" id="problem-heading">
              Lo que más le preocupa a la gente no es cuánto le prestan
            </h2>
            <div className="prose">
              <p>
                En el tiempo que llevo dentro del ramo financiero me he dado
                cuenta de algo: a la gente no le preocupa cuánto le pueden
                prestar, le preocupa cómo lo va a pagar y si realmente le
                conviene.
              </p>
              <p>
                Muchas veces esas dudas vienen por malas experiencias o por
                personas a las que nunca les explicaron cómo funciona un
                financiamiento.
              </p>
              <blockquote className="pull-quote">
                <p>
                  Por eso decidí crear Los Préstamos con Luis. Porque más que
                  obtener dinero, se trata de entender qué estás haciendo,
                  conocer tu contrato, tus derechos como usuario y aprender a
                  usar tu crédito a tu favor.
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
