import { Skeleton } from "@nextui-org/react";
import Card from "@src/components/common/Card";
import ContainerBlock from "@src/components/common/ContainerBlock/ContainerBlock";
import HeroTitle from "@src/components/common/HeroTitle";
import { BASE_URL, IMeta } from "@src/types";
import { pushUniqueObject } from "@src/utils/pushUniqueObj";
import { useRequest } from "@src/utils/useRequest";

import { useEffect, useState } from "react";

const meta: IMeta = {
  title: "منزل - Manzil",
  description:
    "A list of ayahs that heals and protects against unwanted things",
  type: "website",
  image: "/favicon.ico",
};

interface IAyahAudioItem {
  id: number;
  audio_url: string;
  surahName: string;
  verseNumber: string;
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [ayahAudioList, setAyahAudioList] = useState<IAyahAudioItem[]>([]);
  const { result: surahAlFatihah, run: getSurahAlFatihah } = useRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/chapter_recitations/7/1`,
    headers: {
      Accept: "application/json",
    },
  });
  const { result: surahAlBaqarah, run: getSurahAlBaqarah } = useRequest({
    method: "get",
    maxBodyLength: Infinity,
    url: `${BASE_URL}/quran/recitations/7`,
    headers: {
      Accept: "application/json",
    },
    params: {
      chapter_number: 2,
    },
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(true);

      getSurahAlFatihah();
      getSurahAlBaqarah();
    }, 3000);

    return () => {
      clearTimeout(timerId);
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    if (surahAlFatihah)
      pushUniqueObject(
        ayahAudioList,
        {
          id: 0,
          surahName: "Al-Fatihah",
          audio_url: surahAlFatihah?.audio_file?.audio_url,
          verseNumber: "1-7",
        },
        setAyahAudioList
      );

    if (surahAlBaqarah) {
      surahAlBaqarah?.audio_files?.slice(0, 5).map((item: any, index: number) =>
        pushUniqueObject(
          ayahAudioList,
          {
            id: index + 1,
            audio_url: `https://verses.quran.com/${item?.url}`,
            surahName: `Al-Baqarah`,
            verseNumber: `${index + 1}`,
          },
          setAyahAudioList
        )
      );
    }
  }, []);

  console.log("list of Ayah Audio", ayahAudioList);
  console.log("this is ayahData", surahAlBaqarah);

  return (
    <ContainerBlock meta={meta}>
      <div>
        <HeroTitle
          title="منزل"
          subtitle="A list of ayahs that heals and protects against unwanted things."
        />

        <div></div>

        {ayahAudioList.length > 0 ? (
          <div className="max-w-6xl py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto place-items-center gap-6">
            {ayahAudioList?.map(
              (
                { audio_url, surahName, verseNumber }: IAyahAudioItem,
                index
              ) => (
                <Skeleton
                  isLoaded={loading}
                  className="rounded-xl dark"
                  classNames={{ base: "bg-slate-500" }}
                >
                  <Card
                    key={index}
                    index={index}
                    audioSrc={audio_url}
                    title={surahName}
                    description={verseNumber}
                  />
                </Skeleton>
              )
            )}
          </div>
        ) : (
          <div className="py-12 place-items-center mx-auto justify-center text-center text-xl font-bold">
            No record found brother..
          </div>
        )}
      </div>
    </ContainerBlock>
  );
}
