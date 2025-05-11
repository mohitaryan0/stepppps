"use client";

import { useEffect, useState } from 'react';
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
