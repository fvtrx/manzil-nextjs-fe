import { Skeleton } from "@nextui-org/react";
import Card from "@src/components/common/Card";
import ContainerBlock from "@src/components/common/ContainerBlock/ContainerBlock";
import HeroTitle from "@src/components/common/HeroTitle";
import {
  getSurahAlBaqarah,
  getSurahAlFatihah,
  setLoading,
} from "@src/redux/actions/ayahAction";
import { IAppRootState } from "@src/redux/reducers";
import {
  getAyahAudioList,
  getLoading,
} from "@src/redux/reducers/ayah/ayahReducer";
import { IAyahAudioItem, IMeta } from "@src/types";

import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Dispatch } from "redux";

const meta: IMeta = {
  title: "منزل - Manzil",
  description:
    "A list of ayahs that heals and protects against unwanted things",
  type: "website",
  image: "/favicon.ico",
};

interface IHomeProps {
  getSurahAlFatihah: () => void;
  getSurahAlBaqarah: () => void;
  setLoading: (payload: boolean) => void;
}

const Home = ({
  getSurahAlFatihah,
  setLoading,
  getSurahAlBaqarah,
}: IHomeProps) => {
  const isLoading = useSelector(getLoading);
  const ayahAudioList = useSelector(getAyahAudioList);

  const sortedAyahAudioList = ayahAudioList.sort((a, b) => a.id - b.id);

  useEffect(() => {
    const runAllFunctions = async () => {
      try {
        await Promise.all([getSurahAlFatihah(), getSurahAlBaqarah()]);
        setTimeout(() => {
          setLoading(true);
        }, 2000);
      } catch (error) {
        // TO:D0 - Set error message with Components
        console.error("Error occurred:", error);
      }
    };

    runAllFunctions();
  }, []);

  return (
    <ContainerBlock meta={meta}>
      <div>
        <HeroTitle
          title="منزل"
          subtitle="A collection of ayahs that heals and protects against unwanted things."
        />

        <div></div>

        {sortedAyahAudioList.length > 0 ? (
          <div className="max-w-6xl py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto place-items-center gap-6">
            {sortedAyahAudioList?.map(
              (
                { audio_url, surahName, verseNumber }: IAyahAudioItem,
                index
              ) => (
                <Skeleton
                  key={index}
                  isLoaded={isLoading}
                  className="rounded-xl dark"
                  classNames={{ base: "bg-slate-500" }}
                >
                  <Card
                    index={index}
                    audioSrc={audio_url}
                    title={surahName}
                    description={verseNumber}
                  />
                </Skeleton>
              )
            )}
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
  setLoading: (payload: boolean) => dispatch(setLoading(payload)),
});

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Home);
