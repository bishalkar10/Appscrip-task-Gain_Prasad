import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
}

export default function Card({ title, image }: CardProps) {
  return (
    <li className="flex flex-col justify-end">
      <Image
        src={image}
        alt={`Picture of ${title}`}
        width={300}
        height={0}
        className="w-full aspect-[3/4]"
      />
      <div className="flex gap-x-4 justify-between mt-2 mb-1">
        <p className="text-sm md:text-lg font-bold text-primary overflow-hidden whitespace-nowrap overflow-ellipsis">
          {title}
        </p>
        <Image
          src={"/heart.svg"}
          alt={`Picture of Favorite icon`}
          width={16}
          height={0}
          className="w-4 h-auto md:w-5"
        />
      </div>
      <p className="text-[10px] md:text-sm text-[#888792]">
        <a className="underline">Sign in</a> or Create an account to see pricing
      </p>
    </li>
  );
}
