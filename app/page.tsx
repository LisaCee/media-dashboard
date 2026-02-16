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
    <div>
      <Header isDark={isDark} setIsDark={setIsDark} />
      {/* <CardPrimaryLayout>
        <CardPrimary />
        <CardPrimary />
        <CardPrimary />
        <CardPrimary />
      </CardPrimaryLayout> */}
    </div>
  );
}
