import { NextUIProvider } from "@nextui-org/react";
import NextThemeProvider from "@src/components/common/Providers/NextThemeProvider";
import { store } from "@src/redux/store";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider>
      <NextUIProvider>
        <Provider store={store}>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </Provider>
      </NextUIProvider>
    </NextThemeProvider>
  );
}
