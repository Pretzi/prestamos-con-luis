const steps = [
  {
    num: '01',
    title: 'Envías tus datos para validación inicial',
    body: 'Compartimos un formulario básico para conocer tu perfil, institución y situación actual. Sin compromiso, sin costo.',
  },
  {
    num: '02',
    title: 'Se revisa tu perfil y las opciones disponibles',
    body: 'Se analizan las opciones que aplican para tu caso según la institución, el convenio y las condiciones actuales del mercado.',
  },
  {
    num: '03',
    title: 'Te explicamos condiciones, contrato y forma de pago',
    body: 'Antes de tomar cualquier decisión, entenderás exactamente qué estás firmando, cuánto pagarás cada período y cuáles son tus derechos como acreditado.',
  },
  {
    num: '04',
    title: 'Si decides avanzar, das seguimiento en línea hasta el pago',
    body: 'Todo el trámite se realiza en línea. Tienes acompañamiento en cada etapa hasta que el recurso es depositado.',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="section" aria-labelledby="process-heading">
      <div className="container">
        <h2 className="section__heading" id="process-heading">
          ¿Cómo es el proceso del trámite?
        </h2>
        <p className="section__intro">
          El trámite es 100% en línea, pensado para que puedas hacerlo desde
          cualquier lugar con tu celular e internet. Durante el proceso se te
          comparte seguimiento y evidencia de cómo va avanzando tu trámite.
          La idea es que todo sea práctico, rápido y sin vueltas innecesarias.
        </p>
        <ol className="process-steps" aria-label="Pasos del proceso">
          {steps.map((step) => (
            <li key={step.num} className="process-step">
              <span className="process-step__num" aria-hidden="true">{step.num}</span>
              <div className="process-step__body">
                <h3 className="process-step__title">{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
