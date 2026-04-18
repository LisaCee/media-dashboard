import type { ReactNode } from 'react';

export function CardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-5 justify-items-center items-center md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:justify-center md:gap-8 lg:grid-cols-4 ">
      {children}
    </div>
  );
}
