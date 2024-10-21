"use client";

import { Accordion, AccordionItem, Skeleton, Spinner } from "@nextui-org/react";
import ContainerBlock from "@src/components/common/ContainerBlock/ContainerBlock";
import HeroTitle from "@src/components/common/HeroTitle";
import { OptimizedImage } from "@src/components/OptimizedImage";
import { ISurahItem } from "@src/data/surahList";
import {
  getSurahAlBaqarah,
  getSurahAlFalaq,
  getSurahAlFatihah,
  getSurahAlHasyr,
  getSurahAlIkhlas,
  getSurahAlImran,
  getSurahAlJinn,
  getSurahAlMukminun,
  getSurahAnNas,
  getSurahAsSaffat,
  setLoading,
} from "@src/redux/actions/ayahAction";
import { IAppRootState } from "@src/redux/reducers";
import {
  getAyahAudioList,
  getLoading,
} from "@src/redux/reducers/ayah/ayahReducer";
import { IAyahAudioItem, IHomeProps, IMeta } from "@src/types";
import { componentsOptions } from "@src/utils/componentOption";
import useGetSurahList from "@src/utils/queries/get/useGetSurahList";
import { setFnTimeout } from "@src/utils/setFnTimeout";
import { BookOpenText } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Markdown from "react-markdown";
import { connect, useSelector } from "react-redux";
import { Dispatch } from "redux";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const meta: IMeta = {
  title: "منزل - Manzil",
  description:
    "A list of ayahs that heals and protects against unwanted things",
  type: "website",
  image: "/manzil-logo.png",
  url: "https://quran-manzil.vercel.app/",
};

const Home = ({
  getSurahAlFatihah,
  getSurahAlBaqarah,
  getSurahAlImran,
  getSurahAlMukminun,
  getSurahAlJinn,
  getSurahAlHasyr,
  getSurahAsSaffat,
  getSurahAlIkhlas,
  getSurahAlFalaq,
  getSurahAnNas,
  setLoading,
}: IHomeProps) => {
  const isLoading = useSelector(getLoading);
  const ayahAudioList = useSelector(getAyahAudioList);
  const [playlistIndex, setPlaylistIndex] = useState<number>(0);
  const [verseUrl, setVerseUrl] = useState<string>("");
  const [surahList, setSurahList] = useState<ISurahItem[]>([]);
  const [translation, setTranslation] = useState();

  const sortedAyahAudioList = useMemo(
    () => [...ayahAudioList].sort((a, b) => a.chapter_id - b.chapter_id),
    [ayahAudioList]
  );

  const playPreviousTrack = useCallback(() => {
    setPlaylistIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const playNextTrack = useCallback(() => {
    setPlaylistIndex((prevIndex) =>
      Math.min(prevIndex + 1, sortedAyahAudioList.length - 1)
    );
  }, [sortedAyahAudioList.length]);

  const setPlaylistIndexBasedOnArray = useCallback(
    (sortedArray: IAyahAudioItem[]) => {
      const index = sortedArray.findIndex((item, index) => item[index]);
      if (index !== -1) {
        setPlaylistIndex(index);
      }
    },
    []
  );

  const { data, isLoading: isSurahListLoading } = useGetSurahList({
    refetchOnMount: true,
  });

  useEffect(() => {
    if (data?.data) {
      const respData = data?.data;
      setSurahList(respData.surahList);
      setVerseUrl(respData.surahList[0].content[0].src);
      setTranslation(respData.surahList[0].content[0].translation);
    }
  }, [data]);

  useEffect(() => {
    const getAllAyat = async () => {
      const surahFunctions = [
        { name: "Al-Fatihah", fn: getSurahAlFatihah },
        { name: "Al-Baqarah", fn: getSurahAlBaqarah },
        { name: "Al-Imran", fn: getSurahAlImran },
        { name: "Al-Mukminun", fn: getSurahAlMukminun },
        { name: "Al-Jinn", fn: getSurahAlJinn },
        { name: "Al-Hasyr", fn: getSurahAlHasyr },
        { name: "As-Saffat", fn: getSurahAsSaffat },
        { name: "Al-Ikhlas", fn: getSurahAlIkhlas },
        { name: "Al-Falaq", fn: getSurahAlFalaq },
        { name: "An-Nas", fn: getSurahAnNas },
      ];

      try {
        await Promise.allSettled(surahFunctions.map(({ fn }) => fn()));
        setFnTimeout(setLoading, 2500, true);
      } catch (error) {
        console.error("Error occurred during API calls:", error);
        setLoading(false);
      }
    };
    getAllAyat();
  }, [
    getSurahAlFatihah,
    getSurahAlBaqarah,
    getSurahAlImran,
    getSurahAlMukminun,
    getSurahAlJinn,
    getSurahAlHasyr,
    getSurahAsSaffat,
    getSurahAlIkhlas,
    getSurahAlFalaq,
    getSurahAnNas,
    setLoading,
  ]);

  useEffect(() => {
    setPlaylistIndexBasedOnArray(sortedAyahAudioList);
  }, [sortedAyahAudioList, setPlaylistIndexBasedOnArray]);

  return (
    <ContainerBlock meta={meta}>
      <div className="bg-black">
        <HeroTitle
          title="منزل"
          subtitle="Himpunan ayat suci Al-Quran sebagai penawar dan pelindung dari segala kejahatan."
        />

        <div className="py-8 px-24 lg:px-36 text-center mx-auto">
          <blockquote className="text-xl font-semibold text-white">
            <svg
              className="w-6 h-6 text-gray-400 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p>
              وَنُنَزِّلُ مِنَ ٱلْقُرْءَانِ مَا هُوَ شِفَآءٌۭ وَرَحْمَةٌۭ
              لِّلْمُؤْمِنِينَ ۙ وَلَا يَزِيدُ ٱلظَّـٰلِمِينَ إِلَّا خَسَارًۭا
            </p>

            <p className="my-4 italic font-light text-white/85">
              Dan Kami turunkan dengan beransur-ansur dari Al-Quran (yakni)
              ayat-ayat Suci yang menjadi ubat penawar dan rahmat bagi
              orang-orang yang beriman kepadanya; dan (sebaliknya) Al-Quran
              tidak menambahkan orang-orang yang zalim (disebabkan keingkaran
              mereka) melainkan kerugian jua.
              <br />
              (Surah Al-Isra': Ayat 82)
            </p>
          </blockquote>
        </div>

        <div className="max-w-6xl mx-auto w-full flex-1 lg:flex space-y-4">
          <div className="w-full lg:w-1/3 px-4 lg:border-r border-neutral-700 space-y-4">
            <div className="flex flex-1 place-items-center items-center space-x-4">
              <h1 className="font-bold text-3xl">Senarai Ayat</h1>
              <BookOpenText />
            </div>

            {isSurahListLoading && <Spinner />}

            {!isSurahListLoading && (
              <Accordion
                isCompact
                variant="bordered"
                defaultExpandedKeys={["chapter-1"]}
                itemClasses={{ title: "text-white font-semibold" }}
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      height: "auto",
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          duration: 1,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 1,
                        },
                      },
                    },
                    exit: {
                      y: -10,
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: {
                          easings: "ease",
                          duration: 0.25,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 0.3,
                        },
                      },
                    },
                  },
                }}
              >
                {surahList.flatMap((item) => (
                  <AccordionItem
                    key={`chapter-${item.chapter_id}`}
                    title={item.surahName}
                    className="text-[#0AFDB0]"
                  >
                    {item.content.flatMap((url) => (
                      <li
                        onClick={() => {
                          setVerseUrl(url.src);
                          setTranslation(url.translation);
                        }}
                        className="cursor-pointer hover:text-blue-500"
                      >
                        Ayat {url.ayat}
                      </li>
                    ))}
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>

          <div className="w-full place-items-center items-center px-4 flex-col space-y-6 mx-auto">
            {isSurahListLoading && <Spinner />}

            {!isSurahListLoading && (
              <div className="bg-[#1d1e23] p-10 rounded-xl">
                <OptimizedImage
                  url={verseUrl}
                  alt="Verse image"
                  className="border-b border-neutral-700"
                />

                <Markdown
                  components={componentsOptions}
                  className="w-full text-neutral text-justify"
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {translation}
                </Markdown>
              </div>
            )}

            <Skeleton
              isLoaded={isLoading}
              className="rounded-xl dark w-full"
              classNames={{ base: "bg-slate-500" }}
            >
              <AudioPlayer
                autoPlay={true}
                autoPlayAfterSrcChange={true}
                onEnded={playNextTrack}
                src={sortedAyahAudioList[playlistIndex]?.audio_url}
                showSkipControls={true}
                showJumpControls={false}
                onClickPrevious={playPreviousTrack}
                onClickNext={playNextTrack}
                header={
                  <div className="text-black flex flex-col gap-2">
                    <div className="font-semibold">
                      {`Surah ${sortedAyahAudioList[playlistIndex]?.surahName} - ${sortedAyahAudioList[playlistIndex]?.chapter_id}:${sortedAyahAudioList[playlistIndex]?.verseNumber}`}
                    </div>
                    <div className="pb-2">Sheikh Mishary Rashid Al-Afa'asy</div>
                  </div>
                }
                style={{
                  borderRadius: "10px",
                  background: `linear-gradient(to top, #dfe9f3 0%, white 100%)`,
                }}
                layout="stacked"
                customProgressBarSection={[
                  RHAP_UI.PROGRESS_BAR,
                  RHAP_UI.CURRENT_LEFT_TIME,
                ]}
              />
            </Skeleton>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
};

const mapStateToProps = (state: IAppRootState) => ({
  ayah: state.ayah.ayahAudioList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSurahAlFatihah: () => dispatch(getSurahAlFatihah()),
  getSurahAlBaqarah: () => dispatch(getSurahAlBaqarah()),
  getSurahAlImran: () => dispatch(getSurahAlImran()),
  getSurahAlMukminun: () => dispatch(getSurahAlMukminun()),
  getSurahAlJinn: () => dispatch(getSurahAlJinn()),
  getSurahAlHasyr: () => dispatch(getSurahAlHasyr()),
  getSurahAsSaffat: () => dispatch(getSurahAsSaffat()),
  getSurahAlIkhlas: () => dispatch(getSurahAlIkhlas()),
  getSurahAlFalaq: () => dispatch(getSurahAlFalaq()),
  getSurahAnNas: () => dispatch(getSurahAnNas()),
  setLoading: (payload: boolean) => dispatch(setLoading(payload)),
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Home);
