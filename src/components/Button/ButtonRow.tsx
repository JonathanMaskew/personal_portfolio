import { ReactNode } from 'react';

interface ButtonRowProps {
  children: ReactNode;
  className?: string;
}

export default function ButtonRow({ children, className }: ButtonRowProps) {
  return (
    <div className={`flex gap-8 gap-y-2 flex-wrap ${className}`}>
      {children}
    </div>
  );
}
