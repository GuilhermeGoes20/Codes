import Image, { StaticImageData } from "next/image";

interface Props {
  text: string;
  image: StaticImageData;
}

export function ListItem({ text, image }: Props) {
  return (
    <li className="flex items-center gap-10 border-b-[1px] border-opacity-gray mb-8 pb-8">
      <div className="w-7 h-7 flex items-center justify-center">
        <Image src={image} alt="image-item" />
      </div>
      <p className="flex-1 text-txt-gray pr-2">{text}</p>
    </li>
  );
}
