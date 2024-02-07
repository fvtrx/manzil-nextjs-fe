import {
  Button,
  CardBody,
  Card as CardContainer,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import { IAyahUrlItem } from "@src/data/static/surahList";
import Link from "next/link";

interface ICardProps {
  index: number;
  title: string;
  description: string;
  surahUrl: IAyahUrlItem[];
}

const handleSubmit = (link: string) => {
  console.log("doing something");
  window.open(link, "_blank");
};

export default function Card({
  index,
  title,
  description,
  surahUrl,
}: ICardProps) {
  return (
    <CardContainer className="w-full">
      <CardHeader className="flex gap-3 justify-between">
        <div className="flex flex-row place-items-center gap-3">
          <Chip>{index + 1}</Chip>
          <p className="text-lg font-semibold">{title}</p>
        </div>
        <p className="text-lg text-default-500">{description}</p>
      </CardHeader>
      <Divider />
      <CardBody>
        {surahUrl && (
          <div className="grid grid-cols-3">
            {surahUrl.map((item: IAyahUrlItem) => (
              <p className="border px-2 border-white/20">
                Verse:{" "}
                <a
                  className="hover:text-blue-500 hover:cursor-pointer"
                  onClick={() => handleSubmit(item.src)}
                >
                  {item.ayat}
                </a>
              </p>
            ))}
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
}
