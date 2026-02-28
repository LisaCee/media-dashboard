import Image from 'next/image';
import type { Service } from '../data/mockData';

function formatNumbers(number: number) {
  if (number < 1_000) {
    return number.toString();
  } else if (number < 1_000_000) {
    return parseFloat((number / 1000).toFixed(1)) + 'k';
  } else {
    return parseFloat((number / 1_000_000).toFixed(1)) + 'M';
  }
}

interface CardProps {
  service: Service;
}

export function CardPrimary({ service }: CardProps) {
  const { username, followers, dailyChange, logoSrc, serviceName, borderClass } = service || {};

  const isNegativeChange = dailyChange < 0;

  return (
    <div
      className={`flex flex-col items-center gap-6 bg-card py-6 w-[300px] rounded-lg service-border ${borderClass} md:p-6 md:w-full`}
    >
      <div className="flex gap-2 items-center">
        <Image src={logoSrc} alt={serviceName} width={20} height={20}></Image>
        <p className="text-xs font-bold text-muted-foreground">{username}</p>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-5xl font-bold text-foreground">{formatNumbers(followers)}</p>
        <p className="text-xs text-muted-foreground font-extralight uppercase tracking-[0.25rem]">
          followers
        </p>
      </div>

      <div className="flex gap-1 items-center">
        {isNegativeChange ? (
          <Image src="/icons/icon-down.svg" alt="decrease" width={10} height={10}></Image>
        ) : (
          <Image src="/icons/icon-up.svg" alt="increase" width={10} height={10}></Image>
        )}
        <p
          className={`text-xs font-semibold ${isNegativeChange ? 'text-brand-red' : 'text-brand-green'}`}
        >
          {formatNumbers(Math.abs(dailyChange))} Today
        </p>
      </div>
    </div>
  );
}
