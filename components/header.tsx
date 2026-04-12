'use client';

interface HeaderProps {
  totalFollowers: number;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export function Header({ totalFollowers, isDark, setIsDark }: HeaderProps) {
  const formattedFollowers = totalFollowers.toLocaleString();

  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl md:text-2xl">Social Media Dashboard</h1>
        <p className="text-xs font-bold text-muted-foreground  md:text-sm">
          Total Followers: {formattedFollowers}
        </p>
      </div>

      <hr className="border-t dark:border-muted-foreground w-full md:hidden" />

      <div className="flex flex-row items-center justify-between gap-2 md:self-center cursor-pointer">
        <p className="text-xs font-bold text-muted-foreground md:text-sm">
          {isDark ? 'Dark' : 'Light'} Mode
        </p>
        <button
          role="switch"
          aria-checked={isDark}
          aria-label="Select a color mode"
          onClick={() => setIsDark(!isDark)}
          className={`
              relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full
              transition-colors duration-200 ease-in-out focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            `}
          style={{
            background: 'linear-gradient(to right, hsl(210, 79%, 56%), hsl(146, 68%, 55%))',
          }}
        >
          <span
            className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg
               ring-0 transition-transform duration-200 ease-in-out ${isDark ? 'translate-x-[0.2rem]' : 'translate-x-[1.4rem]'}`}
          />
        </button>
      </div>
    </div>
  );
}
