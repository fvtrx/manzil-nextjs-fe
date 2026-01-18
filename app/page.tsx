"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Main = dynamic(
  () => import("@/components/Main").then((mod) => mod.Main),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 pt-24 pb-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4" />
          <p className="text-emerald-600">Loading...</p>
        </div>
      </div>
    ),
  },
);

export default function Home() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 3,
            staleTime: 1000 * 60 * 5, // 5 minutes
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      <Footer />
    </QueryClientProvider>
  );
}
