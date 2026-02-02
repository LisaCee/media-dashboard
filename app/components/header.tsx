"use client";

import React, { useState } from "react";

export function Header() {
  const [mode, setMode ] = useState<string>("dark");

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">Social Media Dashboard</h1>
        <p>Total Followers</p>
      </div>
      <p className="capitalize">{mode} Mode</p>
    </div>
  );
}
