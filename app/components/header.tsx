"use client";

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

      <div className="flex flex-row justify-between gap-2 md:self-center">
        <p className="text-xs font-bold text-muted-foreground md:text-sm">
          {isDark ? 'Dark' : 'Light'} Mode
        </p>
        <div>
          <input
            type="checkbox"
            id="darkMode"
            name="darkMode"
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          <label htmlFor="darkMode" className="sr-only">
            Select a color mode
          </label>
        </div>
      </div>
    </div>
  );
}
