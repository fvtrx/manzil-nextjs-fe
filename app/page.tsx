"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "@/components/Main";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 1000 * 60 * 5,
          },
        },
      }),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      <Footer />
    </QueryClientProvider>
  );
}
