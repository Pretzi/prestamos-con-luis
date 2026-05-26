const testimonials = [
  { name: 'David', quote: 'Muchas gracias por la atención. Si todo bien con el financiamiento, me dieron mi dinero rápido.' },
  { name: 'Rosa Elena', quote: 'Es verdad ya me depositaron. Una vez más agradezco muchísimo su apoyo.' },
  { name: 'Esperanza M.', quote: 'Me acaba de llegar el mensaje de la financiera. Ya cheque y está depositado. Muchas gracias por su atención, seguimos en contacto.' },
  { name: 'Patricia G.', quote: 'Muchísimas gracias, sí. Pensé que no me iban a dejar abonar a capital.' },
  { name: 'Claudia', quote: 'Si todo perfecto al 100. Claro que sí, te agradezco tu atención.' },
  { name: 'Leticia', quote: 'Gracias Luis. Excelente servicio. Me voy a asesorar contigo cuando quiera dar un abono extra.' },
  { name: 'Verónica', quote: 'Hola, gracias, todo muy bien. Sí, súper rápido. Muchas gracias.' },
  { name: 'Norma L.', quote: 'Gracias por todo. El trámite fue un éxito. Me urgía más pero con eso empiezo, gracias.' },
];

function TCard({ name, quote, hidden }: { name: string; quote: string; hidden?: boolean }) {
  return (
    <figure
      className="tcard"
      role={hidden ? 'presentation' : 'listitem'}
      aria-hidden={hidden ? true : undefined}
    >
      <blockquote className="tcard__quote">{quote}</blockquote>
      <figcaption className="tcard__author">
        <span className="tcard__name">{name}</span>
        <span className="tcard__source">vía WhatsApp</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonials__header">
          <p className="testimonials__stat">+500 clientes atendidos</p>
          <h2 className="testimonials__heading" id="testimonials-heading">
            Lo que dicen quienes ya tramitaron
          </h2>
          <p className="testimonials__sub">
            Conversaciones reales de WhatsApp con clientes satisfechos
          </p>
        </div>
        <div className="testimonials__track-wrapper">
          <div className="testimonials__track" role="list">
            {testimonials.map((t) => (
              <TCard key={t.name} name={t.name} quote={t.quote} />
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((t) => (
              <TCard key={`dup-${t.name}`} name={t.name} quote={t.quote} hidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
