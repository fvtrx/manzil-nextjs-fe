import Image from "next/image";

interface OptimizedImageProps {
  url: string;
  alt: string;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  url,
  alt,
  className = "",
}) => {
  return (
    <div className="relative aspect-[10/7] w-full">
      <Image
        className={` object-contain ${className}`}
        alt={alt}
        src={url}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
        quality={80}
      />
    </div>
  );
};
