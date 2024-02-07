import { Skeleton } from "@nextui-org/react";
import Card from "@src/components/common/Card";
import ContainerBlock from "@src/components/common/ContainerBlock/ContainerBlock";
import HeroTitle from "@src/components/common/HeroTitle";
import { ISurahItem, surahList } from "@src/data/static/surahList";
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
import { setFnTimeout } from "@src/utils/setFnTimeout";
import { useEffect, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { connect, useSelector } from "react-redux";
import { Dispatch } from "redux";

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

  const sortedAyahAudioList = ayahAudioList
    .filter((item) => item !== undefined)
    .sort((a, b) => a.chapter_id - b.chapter_id);

  const playPreviousTrack = () => {
    setPlaylistIndex((prevIndex) =>
      Math.max(playlistIndex === 0 ? 0 : prevIndex - 1, 0)
    );
  };

  const playNextTrack = () => {
    setPlaylistIndex((prevIndex) =>
      Math.min(prevIndex + 1, sortedAyahAudioList.length - 1)
    );
  };

  const setPlaylistIndexBasedOnArray = (sortedArray: Array<IAyahAudioItem>) => {
    // @ts-ignore
    const index = sortedArray.findIndex((item, index) => item[index]);

    if (index !== -1) {
      setPlaylistIndex(index);
    }
  };

  useEffect(() => {
    const runAllFunctions = async () => {
      try {
        await Promise.all([
          getSurahAlFatihah(),
          getSurahAlBaqarah(),
          getSurahAlImran(),
          getSurahAlMukminun(),
          getSurahAsSaffat(),
          getSurahAlHasyr(),
          getSurahAlJinn(),
          getSurahAlIkhlas(),
          getSurahAlFalaq(),
          getSurahAnNas(),
        ]);

        setFnTimeout(setLoading, 2500, true);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    runAllFunctions();
  }, []);

  useEffect(() => {
    setPlaylistIndexBasedOnArray(sortedAyahAudioList);
  }, [playlistIndex]);

  return (
    <ContainerBlock meta={meta}>
      <div className="bg-black">
        <HeroTitle
          title="منزل"
          subtitle="A collection of ayahs that heals and protects against unwanted things."
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
              We send down the Quran as a healing and mercy for the believers,
              but it only increases the wrongdoers in loss.
              <br />
              (Surah Al-A'raf: 82)
            </p>
          </blockquote>
        </div>

        <div className="max-w-6xl mx-auto place-items-center w-full lg:w-1/3 py-4">
          <div className="py-8 text-center mx-auto">
            <h2 className="text-default-800">
              Click <kbd className="underline">Play</kbd> to start listening to
              Manzil
            </h2>
          </div>
          <Skeleton
            isLoaded={isLoading}
            className="rounded-xl dark"
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
              style={{ borderRadius: "10px" }}
              layout="horizontal"
              customProgressBarSection={[
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.CURRENT_LEFT_TIME,
              ]}
            />
          </Skeleton>
        </div>

        <div className="py-8 text-center mx-auto text-default-800">
          <h2 className=" font-bold text-2xl">Verse List</h2>
        </div>

        {surahList.length > 0 ? (
          <div className="py-8 px-4 md:px-36 lg:px-96 grid grid-cols-1 gap-12 overflow-x-hidden">
            {surahList
              ?.sort((a, b) => a.chapter_id - b.chapter_id)
              .map((item: ISurahItem, index) => (
                <>
                  <Skeleton
                    key={index}
                    isLoaded={isLoading}
                    className="rounded-xl dark"
                    classNames={{ base: "bg-slate-500" }}
                  >
                    <Card
                      index={index}
                      title={item.surahName}
                      description={item.arabic_surah_name}
                      surahUrl={item.surahUrl}
                    />
                  </Skeleton>
                </>
              ))}
          </div>
        ) : null}
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
