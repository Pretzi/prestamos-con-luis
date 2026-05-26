'use client';

import { useState, useEffect, useRef } from 'react';

const DEPENDENCIAS = [
  'IMSS',
  'ISSSTE',
  'SEP',
  'Dependencia estatal',
  'Dependencia federal',
  'Otro',
];

const WA_NUMBER = '5212294172112';

interface FormData {
  nombre: string;
  apellido: string;
  telefono: string;
  curp: string;
  dependencia: string;
}

const EMPTY: FormData = { nombre: '', apellido: '', telefono: '', curp: '', dependencia: '' };

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock scroll + focus first field when opening
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Short delay so the element is painted before focusing
      const id = setTimeout(() => firstInputRef.current?.focus(), 40);
      return () => clearTimeout(id);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  function set<K extends keyof FormData>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const errs: Partial<FormData> = {};
    if (!form.nombre.trim()) errs.nombre = 'Requerido';
    if (!form.apellido.trim()) errs.apellido = 'Requerido';
    if (!/^\d{10}$/.test(form.telefono)) errs.telefono = 'Ingresa 10 dígitos';
    const curpClean = form.curp.trim();
    if (curpClean.length !== 18) errs.curp = 'El CURP tiene 18 caracteres';
    if (!form.dependencia) errs.dependencia = 'Selecciona una opción';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const message = [
      'Hola, me gustaría revisar mi caso.',
      '',
      `Nombre: ${form.nombre.trim()} ${form.apellido.trim()}`,
      `Teléfono: ${form.telefono}`,
      `CURP: ${form.curp.trim().toUpperCase()}`,
      `Dependencia: ${form.dependencia}`,
    ].join('\n');

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );

    onClose();
    setForm(EMPTY);
    setErrors({});
  }

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      aria-label="Cerrar"
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <h2 className="modal__title" id="modal-title">Revisar mi caso</h2>
        <p className="modal__sub">Completa tus datos para continuar por WhatsApp.</p>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>

          <div className="modal__row">
            <div className="modal__field">
              <label className="modal__label" htmlFor="modal-nombre">Nombre</label>
              <input
                ref={firstInputRef}
                id="modal-nombre"
                className={`modal__input${errors.nombre ? ' modal__input--error' : ''}`}
                type="text"
                value={form.nombre}
                onChange={(e) => set('nombre', e.target.value)}
                autoComplete="given-name"
              />
              {errors.nombre && <span className="modal__error-msg">{errors.nombre}</span>}
            </div>

            <div className="modal__field">
              <label className="modal__label" htmlFor="modal-apellido">Apellido</label>
              <input
                id="modal-apellido"
                className={`modal__input${errors.apellido ? ' modal__input--error' : ''}`}
                type="text"
                value={form.apellido}
                onChange={(e) => set('apellido', e.target.value)}
                autoComplete="family-name"
              />
              {errors.apellido && <span className="modal__error-msg">{errors.apellido}</span>}
            </div>
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="modal-telefono">Teléfono (10 dígitos)</label>
            <input
              id="modal-telefono"
              className={`modal__input${errors.telefono ? ' modal__input--error' : ''}`}
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={form.telefono}
              onChange={(e) => set('telefono', e.target.value.replace(/\D/g, ''))}
              autoComplete="tel"
            />
            {errors.telefono && <span className="modal__error-msg">{errors.telefono}</span>}
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="modal-curp">CURP</label>
            <input
              id="modal-curp"
              className={`modal__input modal__input--mono${errors.curp ? ' modal__input--error' : ''}`}
              type="text"
              maxLength={18}
              value={form.curp}
              onChange={(e) => set('curp', e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
              autoComplete="off"
              spellCheck={false}
              placeholder="18 caracteres"
            />
            {errors.curp && <span className="modal__error-msg">{errors.curp}</span>}
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="modal-dependencia">Dependencia</label>
            <div className="modal__select-wrapper">
              <select
                id="modal-dependencia"
                className={`modal__select${errors.dependencia ? ' modal__input--error' : ''}`}
                value={form.dependencia}
                onChange={(e) => set('dependencia', e.target.value)}
              >
                <option value="">Selecciona tu dependencia</option>
                {DEPENDENCIAS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <svg className="modal__select-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {errors.dependencia && <span className="modal__error-msg">{errors.dependencia}</span>}
          </div>

          <button type="submit" className="btn modal__submit">
            Continuar por WhatsApp
          </button>

          <p className="privacy-note">
            Tus datos se usan únicamente para validación y análisis del trámite.
          </p>
        </form>
      </div>
    </div>
  );
}
