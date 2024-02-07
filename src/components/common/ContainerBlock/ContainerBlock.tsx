import Footer from "@src/components/common/Footer/Footer";
import { IMeta } from "@src/types";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

interface IContainerBlock {
  children?: React.ReactNode;
  meta?: IMeta;
}

export default function ContainerBlock({ children, meta }: IContainerBlock) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{meta?.title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta content={meta?.description} name="description" />
        <meta property="og:url" content={meta?.url} />
        <meta property="og:type" content={meta?.type} />
        <meta property="og:site_name" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:image" content={meta?.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:description" content={meta?.description} />
        <meta name="twitter:image" content={meta?.image} />
        <meta property="twitter:url" content={meta?.url} />
      </Head>
      <Script
        strategy="beforeInteractive"
        data-name="BMC-Widget"
        data-cfasync="false"
        data-id="fvtrx"
        data-description="Support me on Buy me a coffee!"
        data-message="Terima kasih kerana sudi singgah ke Quran-Manzil.com! Sekiranya anda ingin memberikan sumbangan untuk tujuan penambahbaikan Manzil di masa yang akan datang, amatlah dialu-alukan."
        data-color="#40DCA5"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        dangerouslySetInnerHTML={{
          __html: `
      (function (d, s, id) {
              var js,
                el = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) {
                return;
              }
              js = d.createElement(s);
              js.async = true;
              js.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
              js.id = id;
              js.charset = "UTF-8";
              el.parentNode.insertBefore(js, el);
      })(document, "script", "buymeacoffee-js");
    `,
        }}
      />
      <main className="w-full h-full bg-black">
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
