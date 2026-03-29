import Image from 'next/image';
import type { ServiceOverview } from '../data/mockData';
import { formatNumbers, getServiceLogo, getBorderColor, isNegative } from '../utils';

interface CardPrimaryProps {
  service: ServiceOverview;
}

export function CardPrimary({ service }: CardPrimaryProps) {
  if (!service) return;

  const { username, totalFollowers, followersChange, serviceName } = service || {};

  const logoSrc = getServiceLogo(serviceName);

  const isNegativeChange = isNegative(followersChange);

  const borderColor = getBorderColor(serviceName);

  return (
    <div
      className={`flex flex-col items-center gap-6 bg-card py-6 w-[300px] rounded-b-lg service-border ${borderColor} md:p-6 md:w-full cursor-pointer hover:bg-card-hover`}
    >
      <div className="flex gap-2 items-center">
        <Image src={logoSrc} alt={serviceName} width={20} height={20}></Image>
        <p className="text-xs font-bold text-muted-foreground">{username}</p>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-5xl font-bold text-foreground">{formatNumbers(totalFollowers)}</p>
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
          {formatNumbers(Math.abs(followersChange))} Today
        </p>
      </div>
    </div>
  );
}
