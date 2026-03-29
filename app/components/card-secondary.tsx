import Image from 'next/image';
import { type ServiceDetail } from '../data/mockData';
import { formatNumbers, getServiceLogo, isNegative } from '../utils';

interface CardSecondaryProps {
  serviceDetail: ServiceDetail;
}

export function CardSecondary({ serviceDetail }: CardSecondaryProps) {
  const service = serviceDetail?.serviceName;

  const logoSrc = getServiceLogo(service);

  return (
    <>
      {serviceDetail.detail.map((detail, i) => (
        <div
          key={service + i}
          className="flex flex-col bg-card gap-4 py-6 w-[300px] rounded-lg md:p-6 md:w-full cursor-pointer hover:bg-card-hover"
        >
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold text-muted-foreground">{detail.label}</p>
            <Image src={logoSrc} alt={service} width={20} height={20} />
          </div>
          <div className="flex justify-between items-end">
            <p className="text-2xl font-bold text-foreground">{formatNumbers(detail.value)}</p>
            <div className="flex gap-1 items-center">
              {isNegative(detail.change) ? (
                <Image src="/icons/icon-down.svg" alt="decrease" width={10} height={10} />
              ) : (
                <Image src="/icons/icon-up.svg" alt="increase" width={10} height={10} />
              )}
              <p
                className={`text-xs font-semibold ${isNegative(detail.change) ? 'text-brand-red' : 'text-brand-green'}`}
              >
                {detail.change}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
