// border, icon, details
import Image from 'next/image';

interface CardPrimaryProps {
  serviceData: {
    username: string;
    followers: number;
    dailyChange: number;
  };
}

export function CardPrimary({ serviceData }: CardPrimaryProps) {
  const { username, followers, dailyChange } = serviceData || {};
  const isNegativeChange = dailyChange < 0;

  return (
    <div className="flex flex-col items-center gap-6 bg-card py-6 rounded-lg border-t-[4px] border-facebook-blue">
      <div className="flex gap-2 items-center">
        <Image src="/brand-icons/icon-facebook.svg" alt="facebook" width={20} height={20}></Image>
        <p className="text-xs font-bold text-muted-foreground">{username}</p>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-5xl font-bold text-foreground">{followers}</p>
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
          {Math.abs(dailyChange)} Today
        </p>
      </div>
    </div>
  );
}