'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Si ya tengo uno activo puedo obtener otro?',
    answer:
      'Sí. Tener uno vigente no significa que ya no puedas aplicar. Se revisa tu capacidad y la financiera determina si aún puedes acceder a otra opción.',
  },
  {
    question: '¿Cuándo recibo el dinero?',
    answer:
      'La mayoría de los procesos se pagan el mismo día o al siguiente, dependiendo de horarios, validaciones y autorizaciones.',
  },
  {
    question: '¿Cuánto tiempo tengo para pagar un financiamiento?',
    answer:
      'Todas las financieras manejan un plazo máximo, pero no significa que tengas que usarlo completo. Puedes liquidar antes o hacer abonos a capital para ahorrar intereses.',
  },
  {
    question: '¿Revisan Buró de Crédito?',
    answer:
      'Sí puede revisarse, pero no siempre define el resultado. También se consideran otros factores como ingresos, banco donde cobras e historial.',
  },
  {
    question: '¿Qué pasa con mis datos personales?',
    answer:
      'Tus datos se usan únicamente para validación y análisis del trámite conforme a políticas de privacidad y procesos internos.',
  },
  {
    question: '¿Qué pasa si tengo problemas para pagar?',
    answer:
      'Si llegas a tener alguna situación, se revisan opciones de orientación y posibles convenios según el caso.',
  },
  {
    question: '¿Cuál es la ventaja de hacerlo con Luis?',
    answer:
      'No solo se trata de obtener el dinero. La idea es entender cómo funciona, conocer tu contrato y usarlo mejor.',
  },
  {
    question: '¿Qué documentos necesito?',
    answer:
      'Para una validación inicial normalmente solo necesitamos tu INE por la parte frontal y tu último talón de pago.',
  },
  {
    question: '¿Cuánto debo tener disponible en mi talón de pago?',
    answer:
      'Depende de la financiera y del ingreso en bruto, pero normalmente se busca un disponible aproximado de $1,500 pesos.',
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
