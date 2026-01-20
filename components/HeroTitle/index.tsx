"use client";

import { Amiri, Cinzel } from "next/font/google";

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
});

const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function ManzilHeader() {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="icon-title-group">
          <div className="quran-icon">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zm-58.4 83.2H96c-19.2 0-32-12.8-32-32s12.8-32 32-32h293.6v64zM416 294.4H96c-10.88 0-21.12 2.24-30.72 6.08V96c0-19.2 12.8-32 32-32h318.72v230.4zm-32-198.4H128v32h256v-32zm0 64H128v32h256v-32z" />
            </svg>
          </div>
          <h1 className={`arabic-title ${amiri.className}`}>منزل</h1>
        </div>

        <p className={`subtitle ${cinzel.className}`}>
          Himpunan ayat suci{" "}
          <span className="subtitle-highlight">Al-Quran</span> sebagai penawar
          dan pelindung
          <br />
          dari segala kejahatan
        </p>
      </div>

      <style jsx>{`
        .header-wrapper {
          padding: 40px 20px 30px;
        }

        .header-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .icon-title-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 20px;
          animation: fadeInDown 0.6s ease-out;
        }

        .quran-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #4db8a0 0%, #3aa08a 100%);
          border-radius: 12px;
          padding: 10px;
          box-shadow: 0 4px 12px rgba(77, 184, 160, 0.2);
          transition: transform 0.3s ease;
        }

        .quran-icon:hover {
          transform: translateY(-2px);
        }

        .quran-icon svg {
          width: 100%;
          height: 100%;
          fill: white;
        }

        .arabic-title {
          font-size: 56px;
          font-weight: 700;
          color: #2c5f4f;
          margin: 0;
          letter-spacing: 2px;
          line-height: 1;
        }

        .subtitle {
          color: #5a6c66;
          font-weight: 500;
          animation: fadeIn 0.8s ease-out 0.2s both;
          font-size: 20px;
          line-height: 1.8;
          letter-spacing: 0.5px;
          max-width: 700px;
          margin: 0 auto;
          animation: fadeIn 1.5s ease-out 0.5s both;
        }

        .subtitle-highlight {
          color: #2c5f4f;
          font-weight: 600;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .header-wrapper {
            padding: 30px 20px 25px;
          }

          .arabic-title {
            font-size: 44px;
          }

          .subtitle {
            font-size: 15px;
          }

          .quran-icon {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 480px) {
          .icon-title-group {
            gap: 12px;
          }

          .arabic-title {
            font-size: 36px;
          }

          .subtitle {
            font-size: 14px;
          }

          .quran-icon {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </div>
  );
}
