'use client';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CardLayout } from '../components/card-layout';
import { CardPrimary } from '../components/card-primary';
import { CardSecondary } from '../components/card-secondary';

import { userData } from '../data/mockData';

import { useState, useEffect } from 'react';

export default function Home() {
  const { totalFollowers } = userData;

  const [isDark, setIsDark] = useState(false);
  const { serviceOverview, serviceDetail } = userData;

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="mx-5 my-7 md:mx-20 md:my-10 max-w-[1600px] flex flex-col flex-1">
      <div className="absolute inset-x-0 top-0 h-1/4 bg-bgPattern rounded-b-xl pointer-events-none"></div>
      <div className="flex flex-col gap-10 relative h-full">
        <Header totalFollowers={totalFollowers} isDark={isDark} setIsDark={setIsDark} />
        <CardLayout>
          {serviceOverview.map((service) => (
            <CardPrimary key={service.serviceName} service={service} />
          ))}
        </CardLayout>
        <h2 className="font-bold text-lg md:text-xl">Overview - Today</h2>
        <CardLayout>
          {serviceDetail.map((service) => (
            <CardSecondary key={service.serviceName} serviceDetail={service} />
          ))}
        </CardLayout>
      </div>
      <Footer />
    </div>
  );
}
