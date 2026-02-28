import type { ReactNode } from 'react';

export function CardPrimaryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-2 justify-center items-center md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:gap-8">
      {children}
    </div>
  );
}
