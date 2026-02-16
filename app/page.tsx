'use client';

import { Header } from './components/header';
import { CardPrimaryLayout } from './components/layouts/card-primary-layout';
import { CardPrimary } from './components/card-primary';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="mx-5 my-7 md:mx-20 md:my-10">
      <div className="absolute inset-x-0 top-0 h-1/3 bg-bgPattern rounded-b-xl pointer-events-none"></div>
      <div className="relative">
        <Header isDark={isDark} setIsDark={setIsDark} />
        {/* <CardPrimaryLayout>
        <CardPrimary />
        <CardPrimary />
        <CardPrimary />
        <CardPrimary />
      </CardPrimaryLayout> */}
      </div>
    </div>
  );
}
