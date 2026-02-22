// border, icon, details
import Image from 'next/image';

export function CardPrimary({ serviceData }) {
  const dailyChange = 1;
  return (
    <div className="flex flex-col items-center gap-6 bg-card py-6 rounded-lg border-t-[4px] border-facebook-blue">
      <div className="flex gap-2 items-center">
        <Image src="/brand-icons/icon-facebook.svg" alt="facebook" width={20} height={20}></Image>
        <p className="text-xs font-bold text-muted-foreground">@nathanf</p>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-5xl font-bold text-foreground">1987</p>
        <p className="text-xs text-muted-foreground font-extralight uppercase tracking-[0.25rem]">
          followers
        </p>
      </div>

      <div className="flex gap-1 items-center">
        {dailyChange > 0 ? (
          <Image src="/icons/icon-up.svg" alt="increase" width={10} height={10}></Image>
        ) : (
          <Image src="/icons/icon-up.svg" alt="decrease" width={10} height={10}></Image>
        )}
        <p
          className={`text-xs font-semibold ${dailyChange > 0 ? 'text-brand-green' : 'text-brand-red'}`}
        >
          {dailyChange} Today
        </p>
      </div>
    </div>
  );
}