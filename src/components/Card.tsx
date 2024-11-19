import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
}

export default function Card({ title, image }: CardProps) {
  return (
    <li className="card">
      <div className="image-wrapper">
        <Image
          src={image}
          alt={`Picture of ${title}`}
          width={300}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="name-wrapper">
        <p>{title}</p>
        <Image
          src={"/heart.svg"}
          alt={`Picture of Favorite icon`}
          width={16}
          height={16}
          className="heart"
        />
      </div>
      <p>
        <a href="#">Sign in</a> or Create an account to see pricing
      </p>
    </li>
  );
}
