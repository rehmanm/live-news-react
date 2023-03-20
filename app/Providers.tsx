"use client";
import React, { useState } from "react";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  const [enableSystem, setEnableSystem] = useState(true);
  return (
    <ThemeProvider enableSystem={enableSystem} attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
