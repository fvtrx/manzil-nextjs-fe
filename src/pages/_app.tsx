import { NextUIProvider } from "@nextui-org/react";
import NextThemeProvider from "@src/components/common/Providers/NextThemeProvider";
import { store } from "@src/redux/store";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider>
      <NextUIProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Provider>
      </NextUIProvider>
    </NextThemeProvider>
  );
}
