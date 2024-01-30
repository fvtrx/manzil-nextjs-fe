import Footer from "@src/components/common/Footer/Footer";
import Navbar from "@src/components/common/Navbar/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { lazy } from "react";

interface IContainerBlock {
  children?: React.ReactNode;
  meta?: any;
}

export default function ContainerBlock({ children, meta }: IContainerBlock) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://nikahshooter.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://nikahshooter.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
