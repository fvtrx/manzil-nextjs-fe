import {
  CardBody,
  Card as CardContainer,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";

interface ICardProps {
  audioSrc: string;
  index: number;
  title: string;
  description: string;
}

export default function Card({
  audioSrc,
  index,
  title,
  description,
}: ICardProps) {
  return (
    <CardContainer className="max-w-[400px] dark">
      <CardHeader className="flex gap-3">
        <Chip>{index + 1}</Chip>
        <div className="flex flex-col justify-end">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">Ayah: {description}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <audio src={audioSrc} controls></audio>
      </CardBody>
    </CardContainer>
  );
}
