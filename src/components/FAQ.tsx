'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Si ya tengo un crédito activo puedo obtener otro?',
    answer:
      'Depende de tu perfil, del tipo de crédito que ya tienes y de la institución financiera. En algunos casos sí es posible obtener un segundo crédito o consolidar el existente. Esto se evalúa durante la revisión inicial del caso, sin compromiso.',
  },
  {
    question: '¿Cuándo recibo el dinero?',
    answer:
      'Los tiempos varían según la institución financiera y el tipo de crédito. Una vez autorizado y firmados los documentos, el depósito generalmente se realiza en días hábiles. Los tiempos exactos se confirman durante el proceso y dependen de cada institución.',
  },
  {
    question: '¿Cuánto tiempo tengo para pagar?',
    answer:
      'Los plazos dependen del tipo de crédito, la institución y tu perfil. Normalmente se ofrecen opciones desde 12 hasta 120 meses, aunque los plazos disponibles varían según el convenio y la institución. Puedes elegir el plazo que mejor se ajuste a tu capacidad de pago quincenal o mensual.',
  },
  {
    question: '¿Revisan Buró de Crédito?',
    answer:
      'Sí. La mayoría de las instituciones financieras consultan el Buró de Crédito como parte del proceso de validación. Tener historial crediticio no descalifica automáticamente una solicitud. Cada caso se evalúa de forma individual según los criterios de la institución.',
  },
  {
    question: '¿Qué pasa con mis datos personales?',
    answer:
      'Tus datos se usan únicamente para validación y análisis del trámite. No se comparten con terceros fuera del proceso de solicitud y se manejan conforme a la normativa de protección de datos personales aplicable en México (LFPDPPP).',
  },
  {
    question: '¿Qué pasa si tengo problemas para pagar?',
    answer:
      'Lo más importante es comunicarse con la institución financiera lo antes posible para conocer las opciones disponibles: reestructura, prórroga o acuerdos de pago. Luis puede orientarte sobre cómo manejar esta situación antes de que escale a un problema mayor.',
  },
  {
    question: '¿Qué documentos necesito?',
    answer:
      'Los documentos varían según la institución, pero generalmente incluyen identificación oficial vigente, talón de pago reciente (al menos el último), CURP y comprobante de domicilio. Algunos trámites pueden requerir documentación adicional, lo cual se informa durante el proceso.',
  },
  {
    question: '¿Cuánto debo tener disponible en mi talón de pago?',
    answer:
      'Cada institución tiene requisitos mínimos de capacidad de descuento. En términos generales, después de aplicar el pago del crédito debes conservar un porcentaje de tu sueldo neto disponible. Los requisitos exactos dependen de la institución y se confirman durante la validación de tu caso.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="preguntas" className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <h2 className="section__heading" id="faq-heading">
          Preguntas frecuentes
        </h2>
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="faq-item"
                // Mimic <details> open attribute for CSS selectors
                data-open={isOpen ? '' : undefined}
              >
                <button
                  className="faq-item__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {faq.question}
                </button>
                <div
                  className="faq-item__body"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="faq-item__answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
