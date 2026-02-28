'use client';

import { Header } from './components/header';
import { CardPrimaryLayout } from './components/layouts/card-primary-layout';
import { CardPrimary } from './components/card-primary';

import { userData } from './data/mockData';

import { useState, useEffect } from 'react';

export default function Home() {
  const { totalFollowers } = userData;

  const [isDark, setIsDark] = useState(false);
  const { services } = userData;

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="mx-5 my-7 md:mx-20 md:my-10">
      <div className="absolute inset-x-0 top-0 h-1/4 bg-bgPattern rounded-b-xl pointer-events-none"></div>
      <div className="flex flex-col gap-10 relative">
        <Header totalFollowers={totalFollowers} isDark={isDark} setIsDark={setIsDark} />
        <CardPrimaryLayout>
          {services.map((service) => (
            <CardPrimary key={service.serviceName} service={service} />
          ))}
        </CardPrimaryLayout>
      </div>
    </div>
  );
}
