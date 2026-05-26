'use client';

import { useModal } from './ModalContext';

interface Props {
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export default function CTAButton({ className, children, ariaLabel }: Props) {
  const { openModal } = useModal();
  return (
    <button
      type="button"
      className={className}
      onClick={openModal}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
