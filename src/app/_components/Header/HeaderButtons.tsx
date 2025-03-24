import Image from "next/image";
import ArrowDown from "@/assets/arrow-down.svg";

type Props = {
  title: string;
};

export function HedaerButtons({ title }: Props) {
  return (
    <div>
      <button className="flex items-center justify-center gap-3">
        <span className="text-white font-bold">{title}</span>
        <Image src={ArrowDown} alt="arrow-down" />
      </button>
    </div>
  );
}
